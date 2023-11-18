import { useNavigation } from '@react-navigation/native';
import React,{Component} from 'react';
import {Button,View,Text,StyleSheet,Image,ScrollView,TouchableWithoutFeedback,Linking} from 'react-native';
import SearchBar from "react-native-dynamic-search-bar";

const Mobile = () =>{
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <View><Text style={{fontSize:30,color:'#fff',fontWeight:'500',textAlign: 'center'}}>Mobile Application</Text></View>
            <View><Text style={{fontSize:30,color:'#fff',fontWeight:'500',textAlign:'center'}}>Development</Text></View>
            <View>
                <SearchBar
                    placeholder="Search here"
                    onPress={() => alert("Search")}
                    inputStyle={{backgroundColor: 'red'}}
                    style={styles.searchBar}
                />
            </View>
            <View style={styles.body}>
                        {/* <View style={styles.scroll}> */}
                    <View style={styles.curve}>
                    <ScrollView>
                            <View style={styles.img2}>
                                <Image
                                    style={{marginLeft:12,width:250,height:200,borderRadius:18}}
                                    source={require('../assets/img2.jpg')}
                                />
                            <View><Text style={{margin:20,fontWeight:'400'}}>A mobile application, most commonly known as an app, is a kind of application software intended to run on a mobile phone, for example, a smartphone or tablet PC.Here We learn How to develop Mobile Application.</Text></View>
                            </View>
                                            {/* content */}
                        <View>
                            <View style={styles.content}>
                                <TouchableWithoutFeedback onPress = {() => Linking.openURL('https://youtu.be/aIzgMFQK0ro')}>
                                    <View style={styles.squre}>
                                        
                                            <Image
                                                style={{marginLeft:30,width:90,height:90,marginTop:12}}
                                                source={require('../assets/a.png')}
                                            />
                                            <View style={styles.text1}><Text style={{fontSize:18,fontWeight:'600',marginLeft:200,marginTop:-60}}>Java</Text></View>
                                    </View>
                                </TouchableWithoutFeedback>    
                            </View>
                            <View style={styles.content}>
                                <TouchableWithoutFeedback onPress = {() => Linking.openURL('https://youtu.be/0-S5a0eXPoc')}>
                                    <View style={styles.squre}>
                                        
                                            <Image
                                                style={{marginLeft:30,width:90,height:100,}}
                                                source={require('../assets/b.jpg')}
                                            />
                                            <View style={styles.text1}><Text style={{fontSize:18,fontWeight:'700',marginLeft:200,marginTop:-60}}>Kotlin</Text></View>
                                    </View>
                                </TouchableWithoutFeedback>    
                            </View>
                            <View style={styles.content}>
                                <TouchableWithoutFeedback onPress = {() => Linking.openURL('https://youtu.be/F9UC9DY-vIU')}>
                                    <View style={styles.squre}>
                                        
                                            <Image
                                                style={{marginLeft:34,width:80,height:80,marginTop:12}}
                                                source={require('../assets/c.png')}
                                            />
                                            <View style={styles.text1}><Text style={{fontSize:18,fontWeight:'700',marginLeft:190,marginTop:-75}}>Objective C</Text></View>
                                    </View>
                                </TouchableWithoutFeedback>    
                            </View>
                            <View style={styles.content}>
                                <TouchableWithoutFeedback onPress = {() => Linking.openURL('https://youtu.be/comQ1-x2a1Q')}>
                                    <View style={styles.squre}>
                                        
                                            <Image
                                                style={{marginLeft:30,width:90,height:70,marginTop:20}}
                                                source={require('../assets/d.jpg')}
                                            />
                                            <View style={styles.text1}><Text style={{fontSize:18,fontWeight:'700',marginLeft:190,marginTop:-70}}>Swift</Text></View>
                                    </View>
                                </TouchableWithoutFeedback>    
                            </View>
                        </View>       
                    </ScrollView>
                    </View>          
            </View>
            
        </View>
    )
    
};

const styles =StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#810541',
    },
    img2:{
        alignItems:'center',
    
    },
    body:{
        flex:1,
    },
    curve:{
        flex:1,
        borderRadius:60,
        backgroundColor:'white',
        marginTop:10,
        borderBottomLeftRadius:80,
        borderTopRightRadius:80,
        marginLeft:27,
        marginRight:27,
    },
    navbar:{
        flex:0.12,
        height:70,
        backgroundColor:'#810541',
        opacity:0.9,
        alignItems:'center',
        marginTop:0,
        marginBottom: -10,
        borderRadius:60,
        margin:-10,
        justifyContent:'space-around',
        flexDirection:'row',
    },
    content:{
        flex: 1,
        flexDirection:'column',
        justifyContent:'space-between',
        margin:20,
        borderColor:'#810541',
    },
    squre:{
        borderColor:'red',
        justifyContent:'space-between',
        flexDirection:'column',
        width:320,
        height:120,
        borderRadius:22,
        borderColor:'#810541',
        borderWidth:6,
    },
    searchBar:{
        marginTop:4,
        elevation:10,
    },
    
})

export default Mobile;