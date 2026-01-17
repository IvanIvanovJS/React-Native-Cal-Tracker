import { StyleSheet, Text, View } from "react-native";
import { styles, customStyles } from "../../styles/styles";
import { useMemo } from "react";

export default function GoalSection({ remainingCalories, eatenFood }) {
  const percentageProgressBar = useMemo(() => {
    if (remainingCalories <= 0) {
      return 100;
    }
    const percentage = (eatenFood / 2000) * 100;
    return percentage;
  }, [eatenFood]);

  return (
    <View style={styles.section}>
      <Text style={goalStyles.heading}>{remainingCalories}</Text>
      <Text style={goalStyles.subHeading}>Calories Remaining</Text>
      <View style={goalStyles.slider}>
        <View
          style={[
            goalStyles.sliderAfter,
            { width: `${percentageProgressBar}%` },
          ]}
        ></View>
      </View>
      <View style={goalStyles.macroWrapper}>
        <View>
          <Text style={goalStyles.macroText}>Goal</Text>
          <Text>2000</Text>
        </View>
        <View>
          <Text style={goalStyles.macroText}>Food</Text>
          <Text style={goalStyles.foodValue}>{eatenFood}</Text>
        </View>
        <View>
          <Text style={goalStyles.macroText}>Exercise</Text>
          <Text style={goalStyles.exerciseValue}>0</Text>
        </View>
      </View>
    </View>
  );
}

const goalStyles = StyleSheet.create({
  heading: {
    fontSize: 22,
    textAlign: "center",
    fontWeight: 500,
    marginBottom: 10,
  },
  subHeading: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: 300,
    color: customStyles.graySecondary,
    marginBottom: 30,
  },

  slider: {
    height: 12,
    backgroundColor: customStyles.graySecondary,
    width: "100%",
    alignSelf: "center",
    borderRadius: 100,
  },

  sliderAfter: {
    height: 12,
    backgroundColor: "black",
    width: 0,
    borderRadius: 100,
  },

  macroWrapper: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  macroText: {
    fontSize: 16,
    color: customStyles.graySecondary,
    fontWeight: 300,
  },
  foodValue: {
    color: "#43A047",
    textAlign: "center",
  },
  exerciseValue: {
    color: "#FB8C00",
    textAlign: "center",
  },
});
