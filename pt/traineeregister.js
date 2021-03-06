
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
  navigator,
} from 'react-native';
import t from 'tcomb-form-native';
var Form =t.form.Form;
var _navigator ;
var Gender = t.enums({
  M: 'Male',
  F: 'Female'
});

var Person = t.struct({
  Name: t.String,              // a required string
  Instructor: t.maybe(t.String),  // an optional string
  age: t.Number,               // a required number
  Phone:t.Number,               // a required number
  password:t.String,            // a required number
  Gym: t.String,              // a required string
  gender: Gender              // enum
  //rememberMe: t.Boolean        // a boolean
});

var options = {
   fields: {
    password: {
      password: true,
      secureTextEntry: true,
    }
  }
}; // optional rendering options (see documentation)


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




var TraineeregisterView = React.createClass({

  getInitialState: function(){
    _navigator = this.props.navigator;
    return {

    };
  },

   _register: function () {

    var value = this.refs.form.getValue();
    var name = value["name"];
    var surname = value["surname"];
    var age = value["age"];
    var phone = value["phone"];
    var gym = value["gym"];
    var password = value["password"];
    var instructor = value["instructor"];
    var gender= value["Gender"];
    var url = 'http://192.168.20.17:8080/pt_server/traineeregister.action';
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
    _navigator.push({
      title:'InstructloginView',
      id:'instructlogin'
    })


  },



 render: function(){
    return (
      <ScrollView 
            contentContainerStyle={{flex:1}}
            keyboardDismissMode='on-drag'
            keyboardShouldPersistTaps={false} >

 

        <View style={styles.maincontain}>
            <View style={styles.formstyle}>
              <Form
                ref="form"
                type={Person}
                options={options}/>
              <TouchableHighlight style={styles.button} onPress={this._register} underlayColor='#99d9f4'>
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
    backgroundColor: '#d7499a',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
});

module.exports = TraineeregisterView;