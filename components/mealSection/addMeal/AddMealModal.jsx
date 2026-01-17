import { Modal, TextInput, View, Text } from "react-native";
import { modalMacronutrients } from "../../../lib/constants";
import { modalStyles } from "../../../styles/styles";
import Button from "../../ui/button/Button";
export default function AddMealModal({ sectionName, visible, onClose }) {
  return (
    <Modal visible={visible} onRequestClose={onClose}>
      <View style={modalStyles.modalContainer}>
        <Text style={modalStyles.modalTitle}>Add Food To {sectionName}</Text>
        <View>
          <Text>Food Name</Text>
          <TextInput
            keyboardType="default"
            placeholder="e.g Pizza slice"
          ></TextInput>
        </View>
        <View>
          <Text>Calories</Text>
          <TextInput keyboardType="number-pad" placeholder="0"></TextInput>
        </View>
        <View>
          {modalMacronutrients.map((macronutrientName, index) => (
            <View key={index}>
              <Text>{macronutrientName}</Text>
              <TextInput placeholder="0" keyboardType="number-pad"></TextInput>
            </View>
          ))}
        </View>
        <View>
          <Button name={"Back"} pressHandler={onClose} />
          <Button name={"Add Food"} />
        </View>
      </View>
    </Modal>
  );
}
