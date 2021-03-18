import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default function About(){
    return(
        <View style={styles.container}>
            <Ionicons name="phone-portrait-outline" size={80}/>
            <Text style={styles.title}>Sobre nós</Text>
            <Text style={styles.description}>
                Expecializados em previsões do tempo.
            </Text>
            <Text style={styles.sub}>
                Qualquer observação, entre em contato conosco:
                +55 12 98280-5148
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ADD8E6',
    },
    title:{
        textAlign:'center',
        fontSize:30,
        color:'#fff',
        fontWeight:'bold',
        padding:20
    },
    description:{
        textAlign:'center',
        color:'#fff',
        fontSize:19,
        padding:5
    },
    sub:{
        color:'#fff',
        fontSize:17,
        textAlign:'center'
    }
});