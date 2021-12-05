import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

import { Card } from 'react-native-elements';



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
                    setQuote({ content: data.content, author: data.author, tags: data.tags })
                }
            })
    }

    return { quote, updateQuote }
}





export const QuotesCard = () => {
    const { quote, updateQuote } = useQuote()
    const btnText = 'Breing me a new quote! ';
    const title = 'Random Quotes';

    return (
        <View>
            <Card
                containerStyle={{
                    width: 400,
                    height: 300,
                    marginTop: 60,
                    backgroundColor: '#8d99ae',
                }}>

                <Card.Title >
                    <Text style={styles.title}> {title} </Text>
                </Card.Title>
                <Card.Divider />
                <Text style={styles.quoteText}> {quote.content} </Text>
                <Text style={styles.quoteAuthor}>-{quote.author} </Text>
                <View style={styles.tags}>
                    <Text style={styles.tagsText}> {quote.tags} </Text>
                </View>
            </Card>
            <Pressable style={styles.btn} onPress={updateQuote} >
                <Text style={styles.btnText}>{btnText}</Text>
            </Pressable>
        </View>



    );
}

export const styles = StyleSheet.create({
    statusBar: {
        backgroundColor: '#4a4e69',
    },
    title: {
        color: '#fff',
    },
    card: {
        flex: 1,
        width: 250,
        // height: 250,
        marginTop: 60,
        backgroundColor: '#8d99ae',
        padding: 7,

    },
    quoteText: {
        fontSize: 20,
        textAlign: "center",
        color: '#fff',
    },
    quoteAuthor: {
        marginTop: 15,
        fontSize: 18,
        color: '#fff',
        paddingBottom: 20,
        textAlign: 'center'
    },
    tags: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    tagsText: {
        color: '#fff',
        backgroundColor: '#adb5bd',
        padding: 6,
        marginLeft: 10,
        borderRadius: 5,
        shadowColor: 'black',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
    },
    btn: {

        width: 300,
        marginTop: 30,
        marginLeft: 60,
        alignItems: 'center',
        display: 'flex',
        flexDirection: "column",
        paddingVertical: 15,
        // justifyContent: 'center',
        // paddingHorizontal: 10,
        // borderRadius: 4,
        // elevation: 2,
        borderRadius: 100 / 2,
        backgroundColor: '#8d99ae'
    },
    btnText: {
        color: '#fff',
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
    }
});
