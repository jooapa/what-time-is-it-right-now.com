import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, Dimensions} from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from "expo-font";

const Grid = () => {
  const { width } = Dimensions.get('window');
  const fontSize = width * 0.3; // 5% of the screen width
  const [currentTime, setCurrentTime] = useState('');

  
  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const options = { hour: 'numeric', minute: 'numeric', hour12: false };
      const timeString = now.toLocaleTimeString('en-US', options);
      setCurrentTime(timeString);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.box}>
          <Text style={styles.text1}>THE TIME</Text>
          <Text style={styles.text2}>RIGHT NOW</Text>
          <Text style={styles.text2}>IS:</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.textbox}>
          <Text style={[styles.result, { fontSize }]}>{currentTime}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#40649c',
  },
  row: {
    flexDirection: 'row',
  },
  box: {
    width: 380,
    height: 400,
    backgroundColor: '#40649c',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textbox: {
    width: 350,
    height: 200,
    backgroundColor: '#40649c',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    fontFamily: 'ComingSoon',
    fontSize: 70,
    color: '#e2eefe',
    textAlign: 'center',
  },
  text2: {
    fontSize: 60,
    color: '#e2eefe',
    textAlign: 'center',
  },
  loading: {
    fontSize: 40,
    color: '#e2eefe',
    textAlign: 'center',
  },
  result: {
    color: '#e2eefe',
    textAlign: 'center',
  },

});

export default Grid;
