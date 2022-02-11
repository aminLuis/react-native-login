import React from "react";
import { View, Image, StyleSheet } from 'react-native'


const Bienvenida = () =>{
    return (
        <View style={styles.container}>
            <Image
            style={styles.img}
            source={require('../assets/img/react-native.png')}
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
      img:{
        width: 200, 
        height: 200, 
        marginBottom: 15
      }
})

export default Bienvenida