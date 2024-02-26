import {View,Text,Button,TextInput} from 'react-native'
import { Boton,Caja } from './Atomicos'


export const Login=()=>{
    return(
      <View>
        <Text>Username...</Text>
        <TextInput placeholder='Username' autoComplete='off' inputMode='numeric'/>
        <Text>Password...</Text>
        <TextInput placeholder='Password' cursorColor={'red'} keyboardType='numeric' secureTextEntry={true} />
        <Button title='Login' />
        <Button title='Cancel'/>
        <Boton 
        texto={'login'} 
        logo={require('../assets/react.png')}
        accion={()=>Alert.alert('Boton de login')}
        colorA={'red'} colorB={'blue'}/>
  
        <Boton 
        texto={'cancel'} 
        logo={require('../assets/favicon.png')}
        accion={()=>Alert.alert('Boton de alerta ')}
        colorA={'red'} colorB={'blue'}/>
  
        <Boton 
        texto={'register'} 
        logo={require('../assets/icons8-reaccionar-nativo-50.png')} 
        accion={()=>Alert.alert('Boton de registro')}
        colorA={'red'} colorB={'blue'}/>
  
        <Caja valor={'5'}/>
      </View>
    )
  }