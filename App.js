import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';


import { QuotesCard } from './components/quoteCard/QuotesCard';







export default function App() {
  return (
    <View style={styles.container}>
      <QuotesCard />

      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
