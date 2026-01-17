import { styles } from "../../styles/styles";
import { View, Text } from "react-native";
export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>CalTrack</Text>
    </View>
  );
}
