import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { customStyles } from "../../../styles/styles";

export default function MealCard({ name, protein, carbs, fat, calories, id }) {
  return (
    <View style={styles.cardWrapper}>
      <View>
        <Text style={styles.cardText}>{name}</Text>
        <Text
          style={styles.macroText}
        >{`P: ${protein}g • C: ${carbs}g • F: ${fat}g`}</Text>
      </View>
      <View>
        <Text
          style={[styles.cardText, { textAlign: "right" }]}
        >{`${calories} cal`}</Text>
        <TouchableOpacity hitSlop={10}>
          <Text style={styles.removeText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
    marginLeft: 10,
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    fontWeight: 500,
  },
  macroText: {
    fontSize: 14,
    color: customStyles.graySecondary,
  },
  removeText: {
    fontSize: 14,
    color: "red",
    textAlign: "right",
  },
});
