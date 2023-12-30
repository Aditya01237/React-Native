import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCard() {

  return (
    <View>
      <Text style={styles.headingText}>ElevatedCard</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card,styles.elevatedCard]}>
            <Text style={styles.subheading}>1</Text>
        </View>
        <View style={[styles.card,styles.elevatedCard]}>
            <Text style={styles.subheading}>2</Text>
        </View>
        <View style={[styles.card,styles.elevatedCard]}>
            <Text style={styles.subheading}>3</Text>
        </View>
        <View style={[styles.card,styles.elevatedCard]}>
            <Text style={styles.subheading}>4</Text>
        </View>
        <View style={[styles.card,styles.elevatedCard]}>
            <Text style={styles.subheading}>5</Text>
        </View>
        <View style={[styles.card,styles.elevatedCard]}>
            <Text style={styles.subheading}>6</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:25,
        fontWeight:'bold',
        paddingHorizontal:10
    },
    subheading:{
        fontSize:25,
        color:'#000000'
    },
    container:{
        padding:8
    },
    elevatedCard:{
        backgroundColor:'#50DBB4',
        margin:10,
        borderRadius:5
    },
    card:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:100,
        height:100,
    }
})