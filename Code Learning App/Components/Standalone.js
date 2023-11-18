import { useNavigation } from '@react-navigation/native';
import React,{Component} from 'react';
import {Button,View,Text,StyleSheet,Image,ScrollView,TouchableWithoutFeedback,Linking} from 'react-native';
import SearchBar from "react-native-dynamic-search-bar";

const Standalone = () =>{
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <View><Text style={{fontSize:30,color:'#fff',fontWeight:'500',textAlign: 'center'}}>Standalone Application</Text></View>
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
                            <View style={styles.img3}>
                                <Image
                                    style={{marginLeft:12,width:180,height:160,borderRadius:18}}
                                    source={require('../assets/img3.jpg')}
                                />
                            <View><Text style={{margin:20,fontWeight:'400'}}>A standalone application is an application that runs locally on the device and doesn't require anything else to be functional.Here We learn How to develop standalone Application.</Text></View>
                            </View>
                                            {/* content */}
                        <View>
                            <View style={styles.content}>
                                <TouchableWithoutFeedback onPress = {() => Linking.openURL('https://www.w3schools.com/python/default.asp')}>
                                    <View style={styles.squre}>
                                        
                                            <Image
                                                style={{marginLeft:30,width:90,height:90,marginTop:12}}
                                                source={require('../assets/ab.jpg')}
                                            />
                                            <View style={styles.text1}><Text style={{fontSize:18,fontWeight:'700',marginLeft:200,marginTop:-60}}>Python</Text></View>
                                    </View>
                                </TouchableWithoutFeedback>    
                            </View>
                            <View style={styles.content}>
                                <TouchableWithoutFeedback onPress = {() => Linking.openURL('https://www.w3schools.com/c/index.php')}>
                                    <View style={styles.squre}>
                                        
                                            <Image
                                                style={{marginLeft:30,width:80,height:80,marginTop:16}}
                                                source={require('../assets/cd.png')}
                                            />
                                            <View style={styles.text1}><Text style={{fontSize:18,fontWeight:'700',marginLeft:200,marginTop:-60}}>C</Text></View>
                                    </View>
                                </TouchableWithoutFeedback>    
                            </View>
                            <View style={styles.content}>
                                <TouchableWithoutFeedback onPress = {() => Linking.openURL('https://www.w3schools.com/cpp/default.asp')}>
                                    <View style={styles.squre}>
                                        
                                            <Image
                                                style={{marginLeft:34,width:90,height:90,marginTop:6}}
                                                source={require('../assets/xy.png')}
                                            />
                                            <View style={styles.text1}><Text style={{fontSize:18,fontWeight:'700',marginLeft:200,marginTop:-75}}>C++</Text></View>
                                    </View>
                                </TouchableWithoutFeedback>    
                            </View>
                            <View style={styles.content}>
                                <TouchableWithoutFeedback onPress = {() => Linking.openURL('https://www.w3schools.com/js/default.asp')}>
                                    <View style={styles.squre}>
                                        
                                            <Image
                                                style={{marginLeft:30,width:80,height:80,marginTop:16}}
                                                source={require('../assets/9.png')}
                                            />
                                            <View style={styles.text1}><Text style={{fontSize:18,fontWeight:'700',marginLeft:180,marginTop:-60}}>Java Script</Text></View>
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
        padding:10,
    },
    img3:{
        alignItems:'center',
    
    },
    body:{
        flex:1,
    },
    curve:{
        flex:1,
        marginTop:10,
        borderRadius:60,
        backgroundColor:'white',
        marginLeft:20,
        marginRight:20,
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
export default Standalone;