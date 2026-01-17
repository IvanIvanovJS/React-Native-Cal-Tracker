import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/styles";
import { Plus } from "lucide-react-native";
import AddMealModal from "./addMeal/AddMealModal";
import { useState } from "react";

export default function MealSection({ sectionName }) {
  const [toggleModal, setToggleModal] = useState(false);

  const handleModalClose = () => {
    setToggleModal(false);
  };

  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <View>
          <Text style={styles.sectionHeading}>{sectionName}</Text>
          <Text style={styles.sectionCalText}>cal</Text>
        </View>
        <TouchableOpacity onPress={() => setToggleModal(true)}>
          <Plus size={30} />
        </TouchableOpacity>
      </View>
      <AddMealModal
        visible={toggleModal}
        sectionName={sectionName}
        onClose={handleModalClose}
      />
    </View>
  );
}
