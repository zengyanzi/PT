
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
  Alert
} from 'react-native';
import t from 'tcomb-form-native';
//navigation
var _navigator;
var Form =t.form.Form;
var User = t.struct({
  phone: t.String,              // a required string
  password:t.String,
  //rememberMe: t.Boolean        // a boolean
});

var options = {
   fields: {
    password: {
      password: true,
      secureTextEntry: true,
    },
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


var InstructloginView = React.createClass({

  getInitialState: function(){
    _navigator = this.props.navigator;
    return {

    };
  },

   _login:function(){
    var value = this.refs.form.getValue();
    var phone = value["phone"];
    var password=value["password"];
    var url = 'http://192.168.1.15:8080/pt_server/instructorlogin.action';
    url += '?phone='+phone+'&password='+password;
    fetch(url).then(function(response) {  
          return response.json();
        }).then(function(res) {
        console.log(res);
          if (res["data"]!=null) {
            _navigator.push({
              title:'ClientInfoView',
              id:'clientinfo'
            });
        }else{
        Alert.alert('Fail to login','Please check your password');  
        }
      });
  },
  render: function(){
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
              <Form
                ref="form"
                type={User}
                options={options}/>

            <View style={styles.choose}>
              <TouchableOpacity style={styles.btn}
              onPress={this._login}>
              <Text style={styles.text}>login</Text>
              </TouchableOpacity>

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