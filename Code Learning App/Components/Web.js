import { useNavigation } from '@react-navigation/native';
import React,{Component} from 'react';
import {Button,View,Text,StyleSheet,Image,ScrollView,TouchableWithoutFeedback,Linking} from 'react-native';
import SearchBar from "react-native-dynamic-search-bar";

const Web = () =>{
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <View><Text style={{fontSize:30,color:'#fff',fontWeight:'500',textAlign: 'center'}}>Web Application</Text></View>
            <View><Text style={{fontSize:30,color:'#fff',fontWeight:'500',textAlign:'center'}}>Development</Text></View>
            <View>
                <SearchBar
                    placeholder="Search here"
                    onPress={() => alert("Search")}
                    inputStyle={{backgroundColor: 'red',}}
                    style={styles.searchBar}
                />
            </View>
            <View style={styles.body}>
                {/* <View style={styles.scroll}> */}
                    <View style={styles.curve}>
                    <ScrollView>
                            <View style={styles.img}>
                                <Image
                                    style={{marginLeft:12,width:250,height:200,borderRadius:18}}
                                    source={require('../assets/img.jpg')}
                                />
                            <View><Text style={{margin:20,fontWeight:'400'}}>A Web application is an application program that is stored on a remote server and delivered over the Internet through a browser interface.Here We learn How to develop web Application.</Text></View>
                            </View>
                                            {/* content */}
                        <View>
                            <View style={styles.content}>
                                <TouchableWithoutFeedback onPress = {() => Linking.openURL('https://www.w3schools.com/html/default.asp')}>
                                    <View style={styles.squre}>
                                        
                                            <Image
                                                style={{marginLeft:30,width:90,height:100,}}
                                                source={require('../assets/3.png')}
                                            />
                                            <View style={styles.text1}><Text style={{fontSize:18,fontWeight:'600',marginLeft:200,marginTop:-60}}>HTML</Text></View>
                                    </View>
                                </TouchableWithoutFeedback>    
                            </View>
                            <View style={styles.content}>
                                <TouchableWithoutFeedback onPress = {() => Linking.openURL('https://www.w3schools.com/css/default.asp')}>
                                    <View style={styles.squre}>
                                        
                                            <Image
                                                style={{marginLeft:30,width:90,height:100,}}
                                                source={require('../assets/4.jpg')}
                                            />
                                            <View style={styles.text1}><Text style={{fontSize:18,fontWeight:'700',marginLeft:200,marginTop:-60}}>CSS</Text></View>
                                    </View>
                                </TouchableWithoutFeedback>    
                            </View>
                            <View style={styles.content}>
                                <TouchableWithoutFeedback onPress = {() => Linking.openURL('https://www.w3schools.com/js/default.asp')}>
                                    <View style={styles.squre}>
                                        
                                            <Image
                                                style={{marginLeft:34,width:80,height:80,marginTop:12}}
                                                source={require('../assets/9.png')}
                                            />
                                            <View style={styles.text1}><Text style={{fontSize:18,fontWeight:'600',marginLeft:200,marginTop:-75}}>JAVA SCRIPT</Text></View>
                                    </View>
                                </TouchableWithoutFeedback>    
                            </View>
                            <View style={styles.content}>
                                <TouchableWithoutFeedback onPress = {() => Linking.openURL('https://www.w3schools.com/php/default.asp')}>
                                    <View style={styles.squre}>
                                        
                                            <Image
                                                style={{marginLeft:30,width:110,height:60,marginTop:24}}
                                                source={require('../assets/5.png')}
                                            />
                                            <View style={styles.text1}><Text style={{fontSize:18,fontWeight:'600',marginLeft:200,marginTop:-70}}>PHP</Text></View>
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
    img:{
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

export default Web;