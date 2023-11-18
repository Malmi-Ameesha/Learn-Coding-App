// import React from "react";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Home from "./Components/Home";
// import Login from "./Components/Login";
// import Register from "./Components/Register";
// import Web from "./Components/Web";
// import Mobile from "./Components/Mobile";
// import Standalone from "./Components/Standalone";

// const Stack = createNativeStackNavigator();

// const StackNavigator = () =>{
//     return (
//         <Stack.Navigator>
//             <Stack.Group>
//                 <Stack.Screen 
//                  name="Login"
//                  component={Login}
                 
//                  options={{
//                     headerTitleAlign: 'center',
//                     backgroundColor: 'red',
//                     // headerTitleStyle:{
//                     //     backgroundColor: '#f4511e',
                        
//                     // }
//                  }}
//                  />
//                 <Stack.Screen name="Register" component={Register}/>
//                 <Stack.Screen name="Home" component={Home}/>
//                 <Stack.Screen name="Web" component={Web}/>
//                 <Stack.Screen name="Mobile" component={Mobile}/>
//                 <Stack.Screen name="Standalone" component={Standalone}/>
//             </Stack.Group>
//         </Stack.Navigator>
//     )
// };

// export default StackNavigator;