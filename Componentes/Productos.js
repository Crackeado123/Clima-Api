import { View, Text, ActivityIndicator, Image, FlatList, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'

const Productos = () => {
    const [data,setData]=useState([])
    const [load,setLoad]=useState(false)

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(obj=>{
            setData(obj)
            setLoad(true)
        })
    },[])

    const Uscreen=()=>{
        return(
            <View>
                <ActivityIndicator color={'darkblue'}/>
                <Text>Cargando Datos...</Text>
            </View>
        )
    }

    const Card=({title,price,image})=>{
        return(
            <View>
                <Text>Producto : {title}</Text>
                <Text>Precio : ${price} MXN</Text>
                <Image style={{height:70,width:70}} 
                source={{uri:image}}/>
            </View>
        )

    }

    const LScreen=()=>{
        return(
            <Pressable>
                <FlatList
                data={data}
                renderItem={({item})=><Card 
                title={item.title}
                price={item.price}
                image={item.image}/>}
                keyExtractor={item=>item.id}/>
            </Pressable>
        )
    }

  return (
    <View>
      {load?LScreen():Uscreen()}
    </View>
  )
}

export default Productos