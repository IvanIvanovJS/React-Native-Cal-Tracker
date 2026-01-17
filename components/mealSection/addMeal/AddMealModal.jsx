import { Modal, TextInput, View, Text } from "react-native";
import { modalMacronutrients } from "../../../lib/constants";
import { modalStyles } from "../../../styles/styles";
import Button from "../../ui/button/Button";
import { useEffect, useState } from "react";
import uuid from "react-native-uuid";
const initialState = {
  name: "",
  calories: 0,
  protein: 0,
  carbs: 0,
  fat: 0,
  id: uuid.v4(),
};
export default function AddMealModal({ sectionName, visible, onClose, onAdd }) {
  const [meal, setMeal] = useState(initialState);

  const macronutrientsValue = (name) => {
    const modifiedName = name.toLowerCase();
    if (modifiedName.includes("protein")) {
      return "protein";
    } else if (modifiedName.includes("carbs")) {
      return "carbs";
    } else if (modifiedName.includes("fat")) {
      return "fat";
    }
  };

  useEffect(() => {
    !visible && setMeal(initialState);
  }, [visible]);

  return (
    <Modal visible={visible} onRequestClose={onClose} transparent>
      <View style={{ backgroundColor: "rgba(0, 0, 0, 0.50)", height: "100%" }}>
        <View style={modalStyles.modalContainer}>
          <Text style={modalStyles.modalTitle}>Add Food To {sectionName}</Text>
          <View>
            <Text style={modalStyles.modalText}>Food Name</Text>
            <TextInput
              keyboardType="default"
              placeholder="e.g Pizza slice"
              style={modalStyles.modalInput}
              value={meal.name}
              onChangeText={(v) => setMeal((state) => ({ ...state, name: v }))}
            ></TextInput>
          </View>
          <View>
            <Text style={modalStyles.modalText}>Calories</Text>
            <TextInput
              keyboardType="number-pad"
              placeholder="0"
              value={meal.calories}
              onChangeText={(v) =>
                setMeal((state) => ({ ...state, calories: v }))
              }
              style={modalStyles.modalInput}
            ></TextInput>
          </View>
          <View style={modalStyles.micronutrientsWrapper}>
            {modalMacronutrients.map((macronutrientName, index) => (
              <View key={index} style={modalStyles.micronutrientsLayout}>
                <Text style={modalStyles.modalText}>{macronutrientName}</Text>
                <TextInput
                  placeholder="0"
                  value={meal[macronutrientsValue(macronutrientName)]}
                  onChangeText={(v) =>
                    setMeal((state) => ({
                      ...state,
                      [macronutrientsValue(macronutrientName)]: v,
                    }))
                  }
                  keyboardType="number-pad"
                  style={modalStyles.modalInput}
                ></TextInput>
              </View>
            ))}
          </View>
          <View style={modalStyles.btnsWrapper}>
            <Button name={"Back"} pressHandler={onClose} />
            <Button
              name={"Add Food"}
              type={"primary"}
              pressHandler={() => onAdd(meal)}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}
