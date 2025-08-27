import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Dimensions, SafeAreaView } from 'react-native';
import React
 from 'react';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.logoContainer}>
      <Image
        source={require('../assets/logo-viumanent.png')}
        style={styles.logo}
        resizeMode="contain"/>
        
    
      <StatusBar style="auto" />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 5,
  },
  logo: {
    width: Dimensions.get('window').width * 0.6,
    height: Dimensions.get('window').height * 0.2,
  },
});
