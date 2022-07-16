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
import getImageForWeather from './utils/getImageForWeather';
import SearchInput from './components/SearchInput';

export default function App() {

  const location = 'Berlin'

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ImageBackground
          source={getImageForWeather('Clear')}
          imageStyle={styles.image}
          style={styles.imageContainer}
        >

        <View style={styles.detailsContainer}>

        
          <Text style= {[styles.largeText, styles.textStyle]}>
            {location}
          </Text>
          <Text style= {[styles.smallText, styles.textStyle]}>
            Light Cloud
          </Text>
          <Text style= {[styles.largeText, styles.textStyle]}>
            21°
          </Text>
          <SearchInput placeholder="Search any City"/>
          
          <StatusBar style="auto" />
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
    
    
  );
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
  }

});
