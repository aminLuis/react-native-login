import React from "react";
import { View, Text, StyleSheet, Button, Image } from 'react-native'


const Inicio = (props) =>{


    const IrLogin = () =>{
        props.navigation.navigate('Sesion');
    }

    return (
        <View style={styles.container}>
            
            <Image
            style={styles.img}
            source={require('../assets/img/react-native.png')}
            />

            <Button 
            title="Login" 
            style={styles.btn}
            onPress={()=>IrLogin()}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      marginTop: 300
      },

      btn:{
          backgroundColor: 'white'
      },

      img:{
        width: 200, 
        height: 200, 
        marginBottom: 15
      }
})

export default Inicio

