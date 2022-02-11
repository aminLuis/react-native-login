import React, { useState } from "react";
import { StyleSheet, View, TextInput,ScrollView, Button, Image } from 'react-native'

const Sesion = (props) =>{

  const [state, setState] = useState({
      email:'',
      password:''
  });

  const handleChangeText = (name, value) =>{
    setState({...state, [name]:value})
  }

  const IniciarSesion = () => {
      if(state.email === '' || state.password === ''){
          alert('Debe completar las credenciales');
      }else{
          
          try{

             const response = fetch('http://127.0.0.1:8000/user/loginUser',{
                method:'post',
                mode:'no-cors',
                headers:{
                  'Accept':'application/json',
                  'Content-Type':'application/json'
                },
                body: JSON.stringify({
                  email:state.email,
                  password:state.password
                })
              }).catch(function(err){
                console.log(err);
              })
              console.log(response);
              props.navigation.navigate('Bienvenida');
          }catch(e){
            console.log(e);
          }
          
          
      }
  }

    return (
        
        <ScrollView style={styles.container}> 

          <View style={styles.container_img}>
           <Image
            style={styles.img}
            source={require('../assets/img/login.png')}
            />
          </View>

          <View>
              <TextInput type="email" 
              placeholder="Email"
              onChangeText={(value)=> handleChangeText('email',value)}
              style={styles.inputGroup}
              />
          </View>

          <View>
              <TextInput type="password" 
              placeholder="Password"
              onChangeText={(value)=> handleChangeText('password',value)}
              style={styles.inputGroup}
              secureTextEntry={true}
              />
          </View>

          <View>
              <Button title="Ingresar" onPress={()=>IniciarSesion()} />
          </View>

        </ScrollView>

    );
}


const styles = StyleSheet.create({
    container:{
        marginTop: 100,
        padding:35,
        flex: 1
    },

    inputGroup:{
        marginBottom: 12,
        height:40,
        borderRadius: 5,
        backgroundColor: '#D5D8D8',
        textAlign: 'center',
        fontSize: 17
    },
    img:{
      width: 150, 
      height: 150, 
      marginBottom: 40
    },
    container_img: {
      flex: 1,
      alignItems: 'center',
      },
});

export default Sesion