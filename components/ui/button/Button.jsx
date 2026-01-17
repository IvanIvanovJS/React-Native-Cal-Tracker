import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Button({ name, pressHandler, styles }) {
  return (
    <TouchableOpacity onPress={pressHandler}>
      <Text>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnLayout: {
    borderWidth: 1,
  },
});
