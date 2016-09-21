
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
  TouchableHighlight,
  navigator
} from 'react-native';

import t from 'tcomb-form-native';
//import Storage from 'react-native-storage';

var Form =t.form.Form;

var Person = t.struct({
  name: t.String,              // a required string
  //surname: t.maybe(t.String),  // an optional string
  age: t.Number,               // a required number
  phone:t.Number,               // a required number
  password:t.String,
  gym: t.String,              // a required string
  rememberMe: t.Boolean        // a boolean
});

var options = {}; // optional rendering options (see documentation)


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




var InstructregisterView = React.createClass({

  getInitialState: function(){
    _navigator = this.props.navigator;
    return {

    };
  },

   onPress: function () {

    var value = this.refs.form.getValue();
    var name = value["name"];
    var surname = value["surname"];
    var age = value["age"];
    var phone = value["phone"];
    var gym = value["gym"];
    var password = value["password"];
    var url = 'http://192.168.1.15:8080/pt_server/instructorregister.action';
    url += '?name='+name+'&surname='+surname+'&age='+age+'&phone='+phone+'&gym='+gym+'&password='+password;
    fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(function(res){
      console.log(res);
    }).catch((error)=>{
      console.log(error);
    });

  },


  render: function(){
    return (
      <ScrollView 
            contentContainerStyle={{flex:1}}
            keyboardDismissMode='on-drag'
            keyboardShouldPersistTaps={false} >

 
        <View style={styles.container}>
          <View style={styles.Top}>
           <Text style={styles.WelcomeText}>Welcome to Virtual PT</Text>
          </View>
        </View>
        <View style={styles.maincontain}>
            <View>
              <Form
                ref="form"
                type={Person}
                options={options}/>
              <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
                <Text style={styles.buttonText}>Save</Text>
              </TouchableHighlight>
            </View>
        </View>
      </ScrollView>
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
 },
   logo:{
    width:160,
    height:160,
  },
  text:{
    fontWeight: 'bold',
    fontSize: 14,
    color: '#241003',
  },
   buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
});

module.exports = InstructregisterView;