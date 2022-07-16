import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Platform,
  Button,
  KeyboardAvoidingView,
  
} from 'react-native';

export default function SearchInput() {

  handleChangeText = (newLocation) =>{
    this.props.location = newLocation
  }
    return (
      <View>
        <TextInput 
          placeholder="Search any City"
          placeholderTextColor={'white'}
          autoCorrect= {false}
          style={styles.textInput}
          clearButtonMode="always"
          onChangeText={this.handleChangeText}
        />
        
      </View>
    );
  }




const styles = StyleSheet.create({
    textInput: {
        backgroundColor: '#666',
        color: 'white',
        height: 40,
        width: 300,
        marginTop: 20,
        marginHorizontal: 20,
        paddingHorizontal: 20,
        alignSelf: 'center'
    },
  });