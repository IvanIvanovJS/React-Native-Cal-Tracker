import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/styles";
import { Plus } from "lucide-react-native";
import AddMealModal from "./addMeal/AddMealModal";
import { useState } from "react";

export default function MealSection({ sectionName }) {
  const [toggleModal, setToggleModal] = useState(false);
  const [totalCals, setTotalCals] = useState(0);
  const handleModalClose = () => {
    setToggleModal(false);
  };

  const handleSaveCals = (value) => {
    console.log(value);
    setTotalCals((state) => (state += value));
    handleModalClose();
  };

  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <View>
          <Text style={styles.sectionHeading}>{sectionName}</Text>
          <Text style={styles.sectionCalText}>{totalCals} cal</Text>
        </View>
        <TouchableOpacity onPress={() => setToggleModal(true)}>
          <Plus size={30} />
        </TouchableOpacity>
      </View>
      <AddMealModal
        visible={toggleModal}
        sectionName={sectionName}
        onClose={handleModalClose}
        onAdd={handleSaveCals}
      />
    </View>
  );
}
