import { useNavigation } from '@react-navigation/native';
import React,{Component} from 'react';
import {Button,View,Text,StyleSheet,Image,TextInput,ScrollView} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Register = () =>{
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
                    <View style={styles.img}>
                        <Image
                            style={{marginLeft:0,width:120,height:80,opacity:0.5}}
                            source={require('../assets/logo.png')}
                        />
                <Text style={styles.text}>Register</Text>
                <Text style={styles.text2}>You are just a few steps away Just provide some details below to Register</Text>
                    </View>
                                    {/* body */}
                <View style={styles.curve}>
                <ScrollView>
                    <View style={styles.content}>
                        <View style={styles.details}>
                            <View style={styles.detail}><TextInput style={{}} placeholder="E-mail" keybordType="default"/></View>
                            <View style={styles.detail}><TextInput style={{}} placeholder="User Name" keyboardType='default' /></View>
                            <View style={styles.detail}><TextInput style={{}} placeholder="Password" keyboardType='default'/></View>
                            <View style={styles.detail}><TextInput style={{}} placeholder=" Confirm Password" keyboardType='default'/></View>
                        </View>
                        <View style={styles.btn}>
                                <Button
                                    color="#810541"
                                    title = "Register "
                                    onPress = {() => navigation.navigate('Login')}
                                />  
                        </View>
                                    {/* logo icons */}
                        <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:15,}}>
                                <View style={styles.icon}><FontAwesome5 name="facebook" size={42} color="blue" /></View>
                                <View style={styles.icon}><Fontisto name="google" size={40} color="#B21807" /></View>
                                <View style={styles.icon}><Ionicons name="logo-twitter" size={42} color="#82CAFF" /></View>
                        </View>
                    </View>
                </ScrollView>
                </View>
      
        </View>
    )
};

const styles =StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#810541',
        padding:10,
    },
    text:{
        fontSize:42,
        padding:10,
        color:'white',
        fontWeight:'bold',
    },
    text2:{
        color:'white',
        padding:10,
    },
    curve:{
        flex:1,
        borderTopLeftRadius:160,
        backgroundColor:'white',
        paddingTop:100,
        margin:-10,
        marginLeft:35,
        paddingLeft:20,
    },
    content:{
        marginTop:0,
    },
    detail:{
        backgroundColor:'grey',
        padding:12,
        opacity:0.5,
        borderRadius:16,
        borderColor: 'black',
        borderWidth: 1,
        alignItems:'flex-start',
        justifyContent:'space-between',
        width:300,
        marginBottom:16,
        marginLeft:18,
    },
    btn:{
        backgroundColor:'#810541',
        padding:2,
        borderRadius:16,
        width:120,
        alignItems:'center',
        marginLeft:110,
    },
    
})
export default Register;

