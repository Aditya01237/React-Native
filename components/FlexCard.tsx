import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlexCard() {
  return (
    <SafeAreaView>
        <View>
            <Text style={styles.headingText}>FlexCard</Text>
            <View style={styles.container}>
                <View style={[styles.card , styles.cardRed]}>
                    <Text>Red</Text>
                </View>
                <View style={[styles.cardBlue,styles.card]}>
                    <Text>Blue</Text>
                </View>
                <View style={[styles.cardGreen,styles.card]}>
                    <Text>Green</Text>
                </View>
                <View style={[styles.card , styles.cardRed]}>
                    <Text>Red</Text>
                </View>
            </View>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:25,
        fontWeight:'bold',
        paddingHorizontal:10
    },
    container:{
        flex:1,
        flexDirection:'row'
    },
    card:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:100,
        height:100,
        margin:10,
        borderRadius:5
    },
    cardRed:{
        backgroundColor:'#EF5354'
    },
    cardBlue:{
        backgroundColor:'#5DA3FA'
    },
    cardGreen:{
        backgroundColor:'#50DBB4'
    },
})