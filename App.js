import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


const API_URL = "https://api.quotable.io/random";

//Function to handle quotes that are coming from API
function useQuote() {
  //Define a state with default object values 
  const [quote, setQuote] = useState({ content: 'Hello world', author: 'AbduAllah' })

  // hook to let us run a function when our component is loaded to the screen
  useEffect(() => {
    updateQuote()
  }, [])


  function updateQuote() {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        //If there is an Error Do not set data 
        if (data.content && data.author) {
          setQuote({ content: data.content, author: data.author })
        }
      })
  }

  return { quote, updateQuote }
}




export default function App() {
  const { quote, updateQuote } = useQuote()

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.quoteAuthor}>{quote.author} </Text>
        <Text style={styles.quoteText}> {quote.content}</Text>
      </View>
      <View style={styles.quoteButton}>
        <Button
          style={styles.quoteButton}
          onPress={updateQuote}
          title="New Quote!"
        />
      </View>
      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  card: {
    backgroundColor: '#f0efeb',
    paddingBottom: 30,
    borderRadius: 10,
    padding: 7,
  
  },
  quoteText: {
    fontSize: 20,
    textAlign: "center",

  },
  quoteAuthor: {
    marginTop: 15,
    fontSize: 18,
    color: "gray",
    paddingBottom: 20,
  },
  quoteButton: {
    marginTop: 10,
    borderRadius: 15,
  

  }
});
