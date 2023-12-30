import React from "react";

import { View,Text, SafeAreaView ,StyleSheet, useColorScheme} from "react-native";

function AppPro(): JSX.Element{
    const isDarkMode = useColorScheme() === 'dark'

  return (
      <View style={styles.container}>
        <Text style={isDarkMode ? styles.whitemode : styles.blackmode}>Hello Chiku</Text>
      </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex : 1,
        alignItems: 'center',
        justifyContent:'center',
    },
    whitemode:{
        color : '#FFFFFF',
        fontSize:30
    },
    blackmode:{
        color : '#000000'
    }
})

export default AppPro