import React, { useEffect, useState } from 'react';
import { View, Text, Alert, ActivityIndicator, FlatList, Image, ImageBackground, StyleSheet } from 'react-native';

const Clima = () => {
  const [data, setData] = useState(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    fetch('https://api.weatherapi.com/v1/forecast.json?key=5a492ff34efa492b91a172441211110%20&q=huejutla&days=10&aqi=no&alerts=no&lang=es')
      .then(res => res.json())
      .then(obj => {
        setData(obj);
        setLoad(true);
      })
      .catch(err => Alert.alert('Error inesperado: ' + err));
  }, []);

  const Card = ({ fecha, iko, min, max, dayName }) => {
    return (
      <View style={styles.cardContainer}>
        <Text style={styles.cardText}>{dayName}</Text>
        <Text style={styles.cardText}>{fecha}</Text>
        <Image style={styles.cardImage} source={{ uri: 'https:' + iko }} />
        <Text style={styles.cardText}>{max}°C</Text>
        <Text style={styles.cardText}>{min}°C</Text>
      </View>
    );
  };

  const LScreen = () => {
    return (
      <ImageBackground
        source={{ uri: 'https://png.pngtree.com/thumb_back/fw800/background/20220330/pngtree-vertical-blue-sky-cloudscape-natural-background-layout-beautiful-high-day-photo-image_29984116.jpg' }}
        style={styles.backgroundImage}
      >
        <View style={styles.screenContainer}>
          <View style={styles.weatherInfoContainer}>
          <Text style={styles.titleText}>Clima</Text>
            <Text style={styles.locationText}>{data.location.name}</Text>
            <Text style={styles.titleText}>{data.current.temp_c}°C</Text>
            <Text style={styles.conditionText}>
              {data.current.condition.text} * max {data.forecast.forecastday[0].day.maxtemp_c} °C min{' '}
              {data.forecast.forecastday[0].day.mintemp_c} °C
            </Text>
          </View>

          <View style={styles.additionalContainer1}>
            <Text style={styles.additionalText}>Humedad: {data.current.humidity}%</Text>
            <Text style={styles.additionalText}>Viento: {data.current.wind_kph} km/h</Text>
            <Text style={styles.additionalText}>Latitud: {data.location.lat}</Text>
            <Text style={styles.additionalText}>Longitud: {data.location.lon}</Text>
          </View>

          <View style={styles.additionalContainer2}>
            <Text style={styles.additionalText}>Índice UV: {data.current.uv}</Text>
            <Text style={styles.additionalText}>Presión Atmosférica: {data.current.pressure_mb} mb</Text>
            <Text style={styles.additionalText}>Visibilidad: {data.current.vis_km} km</Text>

          </View>

          <FlatList
            data={data.forecast.forecastday}
            renderItem={({ item }) => (
              <Card
                fecha={item.date}
                iko={item.day.condition.icon}
                max={item.day.maxtemp_c}
                min={item.day.mintemp_c}
                dayName={new Date(item.date).toLocaleDateString('en-US', { weekday: 'long' })}
              />
            )}
            keyExtractor={(item) => item.date}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.forecastContainer}
          />
        </View>
      </ImageBackground>
    );
  };

  const Uscreen = () => {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={'large'} color={'darkblue'} />
        <Text style={styles.loadingText}>Cargando datos...</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
     
      {load ? LScreen() : Uscreen()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  screenContainer: {
    
    alignItems: 'center',
    paddingTop: 20,
  },
  weatherInfoContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  locationText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  currentTempText: {
    fontSize: 18,
    marginBottom: 10,
    color: '#fff',
  },
  conditionText: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
    color: '#fff',
  },
  cardContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 10,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  cardText: {
    fontSize: 16,
    marginHorizontal: 5,
  },
  cardImage: {
    width: 50,
    height: 50,
    marginHorizontal: 5,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 16,
    marginTop: 10,
  },
  forecastContainer: {
    marginTop: 10,
    paddingHorizontal: 20,
  },
  additionalContainer1: {
    marginTop: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 10,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  additionalContainer2: {
    marginTop: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 10,
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  additionalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default Clima;
