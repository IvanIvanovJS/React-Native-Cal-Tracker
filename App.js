import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles/styles";
import Header from "./components/header/Header";
import AppBar from "./components/appBar/AppBar";
import { mealSections } from "./lib/constants";
import MealSection from "./components/mealSection/MealSeaction";
export default function App() {
  return (
    <SafeAreaView style={styles.body}>
      <Header />
      <ScrollView>
        <View style={styles.section}>
          <Text>Remaining</Text>
        </View>
        {mealSections.map((section) => (
          <MealSection key={section} sectionName={section} />
        ))}
      </ScrollView>
      <AppBar />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
