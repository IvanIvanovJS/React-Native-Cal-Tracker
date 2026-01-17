import { CirclePlus } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/styles";

export default function AppBar() {
  return (
    <View style={styles.appBar}>
      <TouchableOpacity style={styles.circlePlus}>
        <CirclePlus size={40} />
        <Text style={{ textAlign: "center", marginTop: 1 }}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}
