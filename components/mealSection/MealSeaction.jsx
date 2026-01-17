import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/styles";
import { Plus } from "lucide-react-native";

export default function MealSection({ sectionName }) {
  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <View>
          <Text style={styles.sectionHeading}>{sectionName}</Text>
          <Text style={styles.sectionCalText}>cal</Text>
        </View>
        <TouchableOpacity>
          <Plus size={30} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
