import React, { Component } from 'react';
import { AppRegistry,ScrollView,View,Text,Image,Navigator,TouchableOpacity,StyleSheet} from 'react-native';

var _navigator;
var InstructwelcomeView = require('./instructwelcome.js');
var TraineewelcomeView = require('./traineewelcome.js');

// class PT extends React.Component {
var PT = React.createClass({
    getInitialState: function(){
    return {};
  },

  configureScenceAndroid: function(){
    return Navigator.SceneConfigs.FadeAndroid;
  },

 renderSceneAndroid: function(route, navigator){
    _navigator = navigator;
    if(route.id === 'main'){
      return (
        // <View>

        //   <TouchableOpacity onPress={() => _navigator.push({title:'instructwelcome',id:'instructwelcome'})} style={ styles.button }>
        //     <Text>I am instructor</Text>
        //   </TouchableOpacity>

        // </View>
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
              onPress={() => _navigator.push({title:'InstructwelcomeView',id:'instructwelcome'})}>
              <Text style={styles.text}>I am Instructor</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn}
             onPress={() => _navigator.push({title:'TraineewelcomeView',id:'traineewelcome'})}>
              <Text style={styles.text}> I am trainee</Text>
              </TouchableOpacity>
            </View>
        </View>
      </ScrollView>
       );
    }

    if(route.id === 'instructwelcome'){
      return (
        <InstructwelcomeView navigator={navigator} route={route} />
       );
    }
    if(route.id === 'traineewelcome'){
      return (
        <TraineewelcomeView navigator={navigator} route={route}/>
      );
    }
  

  },

 render: function(){
    var renderScene = this.renderSceneAndroid;
    var configureScence = this.configureScenceAndroid;
    return (
      <Navigator
        debugOverlay={false}
        initialRoute={{ title: 'Main', id:'main'}}
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
  btn:{
     alignSelf: 'stretch',
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor: '#80b8e4',
     height: 40,
     borderRadius: 5,
     width:120,
     marginTop: 100,
     marginLeft:20,
  },
  text:{
    fontWeight: 'bold',
    fontSize: 16,
    color: '#FFF'
  },
});

module.exports = PT
