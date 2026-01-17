import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { customStyles } from "../../../styles/styles";

export default function Button({ name, pressHandler, type }) {
  return (
    <TouchableOpacity
      style={[
        btnStyles.btnLayout,
        type === "primary" && { backgroundColor: "black" },
      ]}
      onPress={pressHandler}
    >
      <Text
        style={[btnStyles.btnText, type === "primary" && { color: "white" }]}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
}

const btnStyles = StyleSheet.create({
  btnLayout: {
    borderWidth: 1,
    borderColor: customStyles.borderColor,
    flex: 1,
    borderRadius: customStyles.borderRadius,
  },
  btnText: {
    padding: 10,
    textAlign: "center",
    fontSize: 16,
    fontWeight: 500,
  },
});
