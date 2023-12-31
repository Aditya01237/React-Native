import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {

    const contacts = [
        {
          uid: 1,
          name: 'Hitesh Choudhary',
          status: 'Just an extra ordinary teacher',
          imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
        },
        {
          uid: 2,
          name: 'Anurag Tiwari',
          status: 'I ❤️ To Code and Teach!',
          imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
        },
        {
          uid: 3,
          name: 'Sanket Singh',
          status: 'Making your GPay smooth',
          imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
        },
        {
          uid: 4,
          name: 'Anirudh Jwala',
          status: 'Building secure Digital banks',
          imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
        },
      ];

  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container}>
        {
            contacts.map(({uid,name,status,imageUrl}) =>(
                <View key={uid} style={styles.card}>
                    <Image
                        source={{uri:imageUrl}}
                        style={styles.cardImage}
                    />
                    <View>
                        <Text style={styles.userName}>{name}</Text>
                        <Text style={styles.userStatus}>{status}</Text>
                    </View>
                </View>
            ))
        }
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:25,
        fontWeight:'bold',
        paddingHorizontal:10,
        marginBottom:10
    },
    container:{
        paddingHorizontal:16,
        marginBottom:4
    },
    card:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginBottom: 5,
        backgroundColor: '#EEF5FF',
        padding: 10,
        borderRadius: 10
    },
    cardImage:{
        height:60,
        width:60,
        borderRadius:30,
        marginRight:15
    },
    userName:{
        fontSize:20,
        fontWeight:'bold',
        color:'#000000'
    },
    userStatus:{
        fontSize:15,
        fontWeight:'500',
        color:'#000000'
    },
})