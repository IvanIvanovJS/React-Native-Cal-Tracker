import { StatusBar } from "expo-status-bar";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles/styles";
import Header from "./components/header/Header";
import { CirclePlus } from "lucide-react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.body}>
      <Header />
      <View style={styles.section}>
        <Text>Remaining</Text>
      </View>
      <View style={styles.section}>
        <Text>Meals</Text>
      </View>
      <View style={styles.appBar}>
        <TouchableOpacity style={styles.circlePlus}>
          <CirclePlus size={40} />
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
