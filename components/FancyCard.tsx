import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>FancyCard</Text>
      <View style={styles.card}>
        <Image
            source={{
                uri:'https://i.pinimg.com/564x/cd/10/d5/cd10d5ba35ef7dcb2c6b01da41f3aaaf.jpg'
            }}
            style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Ram Mandir</Text>
            <Text style={styles.cardLabel}>Ayodhya, UP</Text>
            <Text style={styles.cardDescription}>
            राम मन्दिर अयोध्या में राम जन्मभूमि के स्थान पर बनाया जा रहा एक हिन्दू मन्दिर है जहाँ रामायण के अनुसार, हिन्दू धर्म के भगवान विष्णु के अवतार भगवान श्रीराम का जन्मस्थान है।</Text>
        </View>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:25,
        fontWeight:'bold',
        paddingHorizontal:10
    },
    card:{
        marginTop:10,
        marginHorizontal:20,
        borderRadius:8,
        height:450,
        width:370,
        backgroundColor:'#ffffff'
    },
    cardImage:{
        width:370,
        borderTopLeftRadius:8,
        borderTopRightRadius:8,
        height:200
    },
    cardBody:{
        flex:1,
        alignItems:'center',
        padding:10
    },
    cardTitle:{
        color:'#000000',
        fontSize:35,
        fontWeight:'bold'
    },
    cardLabel:{
        color:'#000000',
        fontSize:20,
        fontWeight:'500'
    },
    cardDescription:{
        color:'#000000',
        fontSize:20,
        fontWeight:'500',
        marginTop:10
    }
})