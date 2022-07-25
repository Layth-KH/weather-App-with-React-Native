import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Platform,
  Button,
  KeyboardAvoidingView,
  ImageBackground,
  
} from 'react-native';
import react, {useState} from 'react';
import axios from 'axios';
import fotoClear from '../../assets/clear.png';

export default function Home(){

    const [city, setCity]=useState("")
    const [weather, setWeather]=useState({})

    const getWeather = async () => {

        try {
            const res = await axios({
                url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=APIKEY`,
                method: 'get',
                timeout: 4000,
            })

            setWeather(res.data);

        } catch (error) {
            alert("Check the city name")
        }
    }
  return (
    <KeyboardAvoidingView style={styles.container}>
      <ImageBackground
          source={fotoClear}
          imageStyle={styles.image}
          style={styles.imageContainer}
        >

        <View style={styles.detailsContainer}>

        {Object.keys(weather).length > 0 ? 
        <>
          <Text style= {[styles.largeText, styles.textStyle]}>
            {weather.name},{weather.sys.country}
          </Text>
          <Text style= {[styles.smallText, styles.textStyle]}>
            {weather.weather[0].main}
          </Text>
          <Text style= {[styles.largeText, styles.textStyle]}>
          {Math.round(weather.main.temp - 273.15)}°C
          </Text>
        </>
        : null }

          <TextInput style={styles.textInputContainer}
          placeholder='Search any City' 
          value={city}
          onChangeText={(text) => setCity(text)}
          />
          <View style={styles.buttonContainer}>
                <Button 
                    onPress={getWeather}
                    title="Ok"         
                />
          </View>
          
          
          <StatusBar style="auto" />
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
    
    
   
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#34495E',
    },
    textStyle: {
      textAlign: 'center',
      fontFamily:
        Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
      color :'white'
    },
    largeText: {
      fontSize: 44
    },
    smallText: {
      fontSize: 18
    },
    image: {
      flex: 1,
      width: null,
      height: null,
      resizeMode: 'cover',
    },
    imageContainer: {
      flex: 1,
    },
    detailsContainer: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0.2)',
      paddingHorizontal: 30,
      alignItems: 'center',
    },
    textInputContainer: {
        padding: 10,
        marginTop: 20,
        backgroundColor: 'white',
        width: '75%',
        borderRadius:5,
    },
    buttonContainer: {
        borderRadius:5,
        marginTop: 20,
        width: '25%',
    }
  
  });
