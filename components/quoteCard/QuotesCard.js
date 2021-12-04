import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, } from 'react-native';


import { Card, Button } from 'react-native-elements'



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
                    setQuote({ content: data.content, author: data.author, tags: data.tags, slug: data.slug })
                }
            })
    }

    return { quote, updateQuote }
}





export const QuotesCard = () => {
    const { quote, updateQuote } = useQuote()


    return (

        <View>
            <View style={styles.header}>

            </View>

            <Card containerStyle={{
                marginTop: 60,
                backgroundColor: '#8d99ae',
                padding: 7,

            }} >

                <Card.Title >
                    <Text style={styles.title}> Random Quotes </Text>
                </Card.Title>
                <Card.Divider />
                <Text style={styles.quoteText}> {quote.content}</Text>
                <Text style={styles.quoteAuthor}>-{quote.author} </Text>
                <View style={styles.tags}>
                    <Text style={styles.tagsText}> {quote.tags}</Text>
                    <Text style={styles.tagsText}> {quote.slug}</Text>
                </View>
            </Card>


            <View style={styles.button}>
                <Button
                    buttonStyle={{ marginLeft: 0, marginRight: 0, marginBottom: 0, borderRadius: 50, backgroundColor: '#8d99ae' }}
                    style={styles.btn}
                    onPress={updateQuote}
                    title="Breing me a new quote!"
                />

            </View>
            <StatusBar style="auto" />
        </View>

    );
}

export const styles = StyleSheet.create({
    statusBar: {
        backgroundColor: '#4a4e69',

    },
    title: {
        color: 'white',
    },
    quoteText: {
        fontSize: 20,
        textAlign: "center",
        color: 'white',

    },
    quoteAuthor: {
        marginTop: 15,
        fontSize: 18,
        color: 'white',
        paddingBottom: 20,
        textAlign: 'center'
    },
    tags: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'flex-end',




    },
    tagsText: {
        color: 'white',
        backgroundColor: '#adb5bd',
        padding: 6,
        marginLeft:10 ,
        borderRadius: 5,
        shadowColor: 'black',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
    },
    button: {
        marginTop: 10,
        backgroundColor: '#8d99ae',
        marginVertical: 8,
        borderRadius: 10

    },
    btn: {
        marginVertical: 8,
    }
});
