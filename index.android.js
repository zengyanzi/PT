import React, { Component } from 'react';
import { AppRegistry,ScrollView,View,Text,Image,TouchableOpacity,StyleSheet} from 'react-native';
class PT extends React.Component {
  render() {
    return (
      <ScrollView
        contentContainerStyle={{flex:1}}
        keyboardDismissMode='on-drag'
        keyboardShouldPersistTaps={false}
      >
       <View style={styles.container}>
          <View style={styles.Top}>
           <Text style={styles.WelcomeText}>Welcome to Virtual PT</Text>
          </View>
       </View>
       <View style={styles.maincontain}>
         <Image
              source={{uri: 'http://oss-hz.qianmi.com/qianmicom/u/cms/qmwww/201511/03102524l6ur.png'}}
              style={styles.logo}/>

            <View style={styles.choose}>
              <TouchableOpacity style={styles.btn}
              onPress={()=> console.log('press me')}>
              <Text style={styles.text}>Register</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn}
              onPress={() => console.log('press me')}>
              <Text style={styles.text}> Login</Text>
              </TouchableOpacity>
            </View>
        </View>
      </ScrollView>
   );
  }
}
var styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#F4FCFF',
  },
  Top:{
    height:50,
    alignItems: 'center',
    backgroundColor:'#f5f2f0',
    justifyContent: 'center',
  },
  WelcomeText:{
    fontWeight: 'bold',
    fontSize: 18,
    color: '#d7499a', 
    borderWidth: 2,
    borderBottomColor:'#b8a6b0',
  },
  maincontain:
  {
    flex: 10,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#F4FCFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
   logo:{
    width:160,
    height:160,
  },
  choose:{
    flexDirection:'row'
  },
  btn:{
     alignSelf: 'stretch',
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor: '#80b8e4',
     height: 40,
     borderRadius: 5,
     width:100,
     marginTop: 100,
     marginLeft:20,
  },
  text:{
    fontWeight: 'bold',
    fontSize: 14,
    color: '#FFF'
  },
});
AppRegistry.registerComponent('test', () =>PT );
