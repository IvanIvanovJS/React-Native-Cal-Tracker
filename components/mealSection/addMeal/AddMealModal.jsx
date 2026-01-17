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
          <Text style={modalStyles.modalText}>Food Name</Text>
          <TextInput
            keyboardType="default"
            placeholder="e.g Pizza slice"
            style={modalStyles.modalInput}
          ></TextInput>
        </View>
        <View>
          <Text style={modalStyles.modalText}>Calories</Text>
          <TextInput
            keyboardType="number-pad"
            placeholder="0"
            style={modalStyles.modalInput}
          ></TextInput>
        </View>
        <View style={modalStyles.micronutrientsWrapper}>
          {modalMacronutrients.map((macronutrientName, index) => (
            <View key={index} style={modalStyles.micronutrientsLayout}>
              <Text style={modalStyles.modalText}>{macronutrientName}</Text>
              <TextInput
                placeholder="0"
                keyboardType="number-pad"
                style={modalStyles.modalInput}
              ></TextInput>
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
