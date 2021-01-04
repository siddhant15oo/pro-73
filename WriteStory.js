import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, KeyboardAvoidingView, Alert, TextInput, TextInputComponent } from 'react-native';
import { Header } from 'react-native-elements';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import firebase from 'firebase'
import db from '../config'


export default class WriteStoryScreen extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          title: '',
          author: '',
          storyText: '',
      }
  }

  submitStory = ()=>{
      db.collection("stories").add({
          title: this.state.title,
          author: this.state.author,
          storyText: this.state.storyText,
          date: firebase.firestore.FieldValue.serverTimestamp().now().toDate()
     })
      this.setState({
          title: '',
          author: '',
          storyText: ''
      })
  }

  render(){
      return(
          <View style={styles.container}>
              <Header 
                  backgroundColor = {'pink'}
                  centerComponent = {{
                      text : 'Story Hub',
                      style : { color: 'black', fontSize: 30}
                  }}
              />
              <TextInput 
                  placeholder="Story Title"
                  onChangeText= {(text)=>{
                      this.setState({
                          title: text
                      })
                  }}
                  value={this.state.title}
                  style={styles.title}
                  placeholderTextColor='black'/>
              <TextInput
                  placeholder="Author"
                  onChangeText= {(text)=>{
                      this.setState({
                          author: text
                      })
                  }}
                  placeholderTextColor='black'
                  value={this.state.author}
                  style={styles.author} />
              <TextInput 
                  placeholder="Write your story"
                  onChangeText= {(text)=>{
                      this.setState({
                          storyText: text
                      })
                  }}
                  placeholderTextColor='black'
                  value={this.state.storyText}
                  style={styles.storyText}
                  multiline={true}/>
              
              <TouchableOpacity
                  style={styles.submitButton}
                  onPress={this.submitStory}
                 >
                  <Text style={styles.buttonText}>Submit</Text>
                  
              </TouchableOpacity>
          </View>
      );
  }
}



const styles = StyleSheet.create({
    container: {
      width:300,
      height:80,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    displayText:{
      fontSize: 15,
      textDecorationLine: 'underline'
    },
    scanButton:{
      backgroundColor: '#2196F3',
      width:50,
      borderWidth:1.5,
      borderLeftWidth:0
    },
    buttonText:{
      fontSize: 15,
      textAlign:"center",
      marginTop:10,
    },
    inputView:{
      flexDirection:"row",
      margin:20,
      
    },
    inputBox:{
      width:200,
      height:40,
      borderWidth:1.5,
      borderRightWidth:0,
      fontSize:20
    },
    submitButton:{
      backgroundColor:'red',
      width:100,
      height:50,
    },
    submitButtonText:{
      padding:10,
      textAlign:'center',
      fontSize:20,
      fontWeight:'bold',
      color:'white',
    }
  });


