import { Modal, TextInput } from "react-native";

export default function AddMealModal({ sectionName }) {
  return (
    <Modal>
      <View>
        <Text>Add Food To {sectionName}</Text>
        <TextInput placeholder="e.g Pizza slice"></TextInput>
      </View>
    </Modal>
  );
}
