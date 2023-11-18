import { useNavigation } from '@react-navigation/native';
import React,{Component} from 'react';
import {Button,View,Text,StyleSheet,Image,TextInput,TouchableOpacity} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const Login = () =>{
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
                <Text style={styles.text}>Learn Coding </Text>
                <Text style={styles.text2}>Enter your E-mail User Name and password {"\n"}to Login</Text>
                <View style={styles.img}>
                    <Image
                        style={{marginLeft:20,width:110,height:80,opacity:0.5}}
                        source={require('../assets/logo.png')}
                    />
                </View>
                        {/* body */}
                <View style={styles.curve}>
                    <View style={styles.content}>
                        <View style={styles.details}>
                            <View style={styles.detail}><TextInput style={{}} placeholder="E-mail" keybordType="default"/></View>
                            <View style={styles.detail}><TextInput style={{}} placeholder="Name" keyboardType='default' /></View>
                            <View style={styles.detail}><TextInput style={{secureTextInput:"True"}} placeholder="Password" keyboardType='default'/></View>
                        </View>
                            <View style={styles.btn}>
                                <Button
                                    color="#810541"
                                    title = "Login "
                                    onPress = {() => navigation.navigate('TabNavigator', {screen: 'Home'})}
                                />  
                            </View>
                            <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:15}}>
                                <View style={styles.rem}><Feather name="check-square" size={20} color="#810541" /><Text>Remember me</Text></View>
                                <View style={styles.rem}><Text>Forgot Password</Text></View>
                            </View>

                            <View style={{alignItems:'center',marginTop:12,}}><Text>or</Text></View>
                                            {/* logo icons */}
                            <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:15,}}>
                                <View style={styles.icon}><FontAwesome5 name="facebook" size={34} color="blue" /></View>
                                <View style={styles.icon}><Fontisto name="google" size={34} color="#B21807" /></View>
                                <View style={styles.icon}><Ionicons name="logo-twitter" size={34} color="#82CAFF" /></View>
                            </View>

                            <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:22,marginRight:-26}}>
                                <View style={styles.btn1}><Text style={{fontSize:12,color:'grey',marginLeft:40}}>Don't have Account</Text></View>
                                <View style={styles.btn1}>
                                    <View style={styles.btn2}>
                                    <TouchableOpacity onPress={()=>
                                    navigation.navigate('Register')}>
                                        <View style={styles.sign}>
                                            <Text style={{marginLeft:-70,fontSize:12,color:'blue',fontWeight:'700'}}>SIgn in</Text>
                                        </View>
                                    </TouchableOpacity>
                                    </View>
                                </View> 
                            </View>
                        </View>  
                </View>
                
        </View>
    )
};

const styles =StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#810541',
        padding:5,
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
        borderTopLeftRadius:160,
        backgroundColor:'white',
        height:'80%',
        paddingTop:100,
        marginTop:-30,
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
    rem:{
        justifyContent:'space-between',
        flexDirection:'row',
    },
    icon:{
        justifyContent:'space-between',
        flexDirection:'row',
    },
    btn1:{
        borderRadius:16,
        width:160,
        alignItems:'center',
        justifyContent:'space-between',
    

    },
})
export default Login;