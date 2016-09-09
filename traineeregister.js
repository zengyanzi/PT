
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

var Person = t.struct({
  Name: t.String,              // a required string
  Surname: t.maybe(t.String),  // an optional string
  age: t.Number,               // a required number
  Phone:t.Number,               // a required number
  Gym: t.String,              // a required string
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

var _navigator ;


var TraineeregisterView = React.createClass({

  getInitialState: function(){
    _navigator = this.props.navigator;
    return {

    };
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
              <TouchableHighlight style={styles.button} onPress={() => _navigator.push({title:'UserInfoView',id:'userinfo'})} underlayColor='#99d9f4'>
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

module.exports = TraineeregisterView;