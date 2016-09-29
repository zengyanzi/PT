
import React, { Component } from 'react';


import {
   Image,
  View,
  Text,
  StyleSheet,
  ViewPagerAndroid,
  BackAndroid,
  ScrollView,
  TouchableOpacity,
  Navigator,
  TextInput,
} from 'react-native';

//navigation
var _navigator;
var ClientInfoView = require('./clientinfo.js');

BackAndroid.addEventListener('hardwareBackPress', function() {
  if(_navigator == null){
    return false;
  }
  if(_navigator.getCurrentRoutes().length === 1){
    return false;
  }
  _navigator.pop();
  return true;
});




var InstructloginView = React.createClass({

  getInitialState: function(){
    _navigator = this.props.navigator;
    return {

    };
  },

  configureScenceAndroid: function(){
    return Navigator.SceneConfigs.FadeAndroid;
  },


 renderSceneAndroid: function(route, navigator){
    _navigator = navigator;
    if(route.id === 'instructlogin'){
    return (
          <ScrollView 
        contentContainerStyle={{flex:1}}
        keyboardDismissMode='on-drag'
        keyboardShouldPersistTaps={false}
      >
        
       <View style={styles.container}>
          <View style={styles.Top}>
           <Text style={styles.WelcomeText}>Welcome to test</Text>
          </View>
       </View>
       <View style={styles.maincontain}>
         <Image
              source={{uri: 'http://oss-hz.qianmi.com/qianmicom/u/cms/qmwww/201511/03102524l6ur.png'}}
              style={styles.logo}/>
            <TextInput 
            ref={(username) => this.username = username}
            onFocus={()=>this.username.focus()}
            style={styles.input}
            placeholder='username'/>
           <TextInput 
            ref={(password) => this.password = password}
            onFocus={() => this.password.focus()}
            style={styles.input}
            placeholder='password' 
            password={true}/>

            <View style={styles.choose}>
              <TouchableOpacity style={styles.btn}
              onPress={() => _navigator.push({title:'ClientInfoView',id:'clientinfo'})}>
              <Text style={styles.text}>login</Text>
              </TouchableOpacity>

            </View>
        </View>
      </ScrollView>
       );
    }
    if(route.id === 'clientinfo'){
      return (
        <ClientInfoView navigator={navigator} route={route}/>
      );
    }
  

  },

 render: function(){
    var renderScene = this.renderSceneAndroid;
    var configureScence = this.configureScenceAndroid;
    return (
      <Navigator
        debugOverlay={false}
        initialRoute={{ title: 'instructlogin', id:'instructlogin'}}
        configureScence={{ configureScence }}
        renderScene={renderScene}/>
   );
  }

});
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
   input: {
   height: 40,
   width:200,
   marginTop: 10, //间隔
   borderWidth: 1, 
   borderRadius: 5, //圆角
   borderColor: 'lightblue'
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
    fontSize: 16,
    color: '#FFF'
  },
});

module.exports = InstructloginView;