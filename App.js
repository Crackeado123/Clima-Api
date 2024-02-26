import {  StyleSheet, Text,  View } from 'react-native';
import Producto from './Componentes/Producto';
import Productos from './Componentes/Productos';
import Clima from './Componentes/Clima';

export default function App() {
  return (
    <View style={styles.container}>
      <Encabezado/>
      <Cuerpo/>
      <Pie/>
    </View>
  );
}
export const Encabezado=()=>{
  return(
    <View style={styles.encabezado}>
    
    </View>
  )
}

export const Cuerpo=()=>{
  return(
    <View style={styles.cuerpo}>
      <Text></Text>
      <Clima/>
    </View>
  )
}

export const Pie=()=>{
  //aqui podria tener varias operaciones sin problemas 
  return(
    <View style={styles.pie}>
       
    </View>
  )
}

export const Pie2=(props)=>{
  return(
    <View style={styles.pie}>
       
    </View>
  )
}

export const Pie3=({op1, op2, op3,op4})=>{
  //aqui podria tener varias operaciones sin problemas 
  return(
    <View style={styles.pie}>
        <Text style={styles.texto}>{op1}</Text>
        <Text style={styles.texto}>{op2}</Text>
        <Text style={styles.texto}>{op3}</Text>
        <Text style={styles.texto}>{op4}</Text>
    </View>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a7d9f3',
    alignItems:'stretch',
    justifyContent: 'center',
  },
  texto:{
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },

  cuerpo:{
    flex:8
  },

  
});
