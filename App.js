import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles/styles";
import Header from "./components/header/Header";
import AppBar from "./components/appBar/AppBar";
import { mealSections } from "./lib/constants";
import MealSection from "./components/mealSection/MealSeaction";
import { useState } from "react";
export default function App() {
  const [overalCalories, setOveralCalories] = useState(0);

  const handleOveralCalories = (value) => {
    setOveralCalories(value);
  };

  return (
    <SafeAreaView style={styles.body}>
      <Header />
      <ScrollView>
        <View style={styles.section}>
          <Text>Goal 2000 </Text>
          <Text>Remaining {2000 - overalCalories} </Text>
        </View>
        {mealSections.map((section, index) => (
          <MealSection
            key={index}
            sectionName={section}
            overalCalories={handleOveralCalories}
          />
        ))}
      </ScrollView>
      <AppBar />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
