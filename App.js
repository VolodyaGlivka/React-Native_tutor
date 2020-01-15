import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HomeContainer from './src/components/Home/HomeContainer';

export default function App() {
  return (
    <View style={styles.fullHeigth}>
      <HomeContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  fullHeigth: {
    minHeight: '100%',
    backgroundColor: '#ccc',
    padding: 30
  }
});
