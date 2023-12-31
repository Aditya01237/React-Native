import React from "react";
import {SafeAreaView, ScrollView } from "react-native";
import FlexCard from "./components/FlexCard";
import ElevatedCard from "./components/ElevatedCard";
import FancyCard from "./components/FancyCard";
import ContactList from "./components/ContactList";

function App(){
  return (
    <SafeAreaView>
      <ScrollView>
        <FlexCard/>
        <ElevatedCard/>
        <ScrollView horizontal={true}>
          <FancyCard/>
          <FancyCard/>
          <FancyCard/>
        </ScrollView>
        <ContactList/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App