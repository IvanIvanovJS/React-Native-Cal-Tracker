import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function MealCard({ name, protein, carbs, fat, calories, id }) {
  return (
    <View style={styles.cardWrapper}>
      <View>
        <Text>{name}</Text>
        <Text>{`P: ${protein}g • C: ${carbs}g • F: ${fat}g`}</Text>
      </View>
      <View>
        <Text>{`${calories} cal`}</Text>
        <TouchableOpacity>
          <Text>Remove</Text>
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
  },
});
