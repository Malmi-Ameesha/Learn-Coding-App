import { useNavigation } from '@react-navigation/native';
import React,{Component} from 'react';
import {Button,View,Text,StyleSheet,TouchableOpacity,Image,TouchableWithoutFeedback,ScrollView} from 'react-native';
import SearchBar from "react-native-dynamic-search-bar";
import { SimpleLineIcons } from '@expo/vector-icons';

const Home = () =>{
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <View style={{marginLeft:25}}>
                <View style={{flexDirection:'row',}}>
                    <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                    <View style={{marginLeft:15,marginTop:10}}>
                        <SimpleLineIcons name="logout" size={24} color="#fff" />
                    </View>
                    </TouchableOpacity>
                    <Text style={styles.text}>Let's Start Learn</Text>
                </View>

            </View>
            <View>
                <SearchBar
                    placeholder="Search here"
                    onPress={() => alert("Search")}
                    inputStyle={{backgroundColor: 'red'}}
                    style={styles.searchBar}
                />
            </View>
            <View style={styles.curve}>
                <ScrollView>
                <View style={styles.imgContainer}>
                <TouchableWithoutFeedback onPress = {() => navigation.navigate('Web')}>
                    <View style={styles.details}>
                        <Image style={styles.img}
                            source={{
                                width:'100%',
                                height:'100%',
                                uri:"https://img.freepik.com/premium-vector/portrait-programmer-working-with-pc_23-2148217001.jpg?w=2000.jpg"
                            }}/>
                        <View style={{ width:500,marginLeft:90,}}><Text style={styles.txt}>Web Application</Text></View>
                    </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress = {() => navigation.navigate('Mobile')}>
                    <View style={styles.details}>
                        <Image style={styles.img}
                            source={{
                                width:'100%',
                                height:'100%',
                                uri:"https://i.pinimg.com/736x/e7/20/5d/e7205d69c58e514b7cbc5a9a51ba9ba6.jpg"
                            }}/>
                        <View style={{ width:500,marginLeft:40,}}><Text style={styles.txt}>Mobile Application Development</Text></View>
                    </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress = {() => navigation.navigate('Standalone')}>
                    <View style={styles.details}>
                        <Image style={styles.img}
                            source={{
                                width:'100%',
                                height:'100%',
                                uri:"https://img.freepik.com/free-vector/qr-code-concept-illustration_114360-5583.jpg?w=2000.png"
                            }}/>
                        <View style={{ width:500,marginLeft:25,}}><Text style={styles.txt}>Standalone Application Development</Text></View>
                    </View>
                    </TouchableWithoutFeedback>

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
    },
    text:{
        fontSize:28,
        fontWeight:'bold',
        marginLeft:40,
        color:'#fff',
    },
    curve:{
        flex:1,
        borderTopLeftRadius:120,
        borderTopRightRadius:120,
        backgroundColor:'white',
        height:'100%',
        paddingTop:30,
        marginTop:30,
        marginLeft:18,
        marginRight:18,
        paddingLeft:20,
    },
    imgContainer:{
        textAlign:'right',
        width:60,
        marginLeft:16,
        marginTop:0,
        borderRadius:12,
    },
    img:{
        flexDirection:'column',
        justifyContent:'space-between',
        width:300,
        height:150,
        borderRadius:22,
        borderColor:'#810541',
        borderWidth:6,
    },
    txt:{
        fontWeight:'900',
   },
   navbar:{
        height:70,
        backgroundColor:'#810541',
        alignItems:'center',
        marginTop:6,
        borderRadius:60,
        marginRight:-16,
        marginLeft:-35,
        justifyContent:'space-around',
        flexDirection:'row',
  },
    searchBar:{
        marginTop:15,
        elevation:10,
    },
    
    
})
export default Home;