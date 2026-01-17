import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/styles";
import { Plus } from "lucide-react-native";
import AddMealModal from "./addMeal/AddMealModal";
import { useState } from "react";
import MealCard from "./mealCard/MealCard";
import uuid from "react-native-uuid";

export default function MealSection({ sectionName }) {
  const [toggleModal, setToggleModal] = useState(false);
  const [meals, setMeals] = useState([]);
  const handleModalClose = () => {
    setToggleModal(false);
  };

  const handleSaveCals = (meal) => {
    setMeals((state) => [...state, { ...meal, id: uuid.v4() }]);
    handleModalClose();
  };

  const totalCals =
    meals.length > 0 ? meals.filter((meal) => meal.calories) : 0;

  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <View>
          <Text style={styles.sectionHeading}>{sectionName}</Text>
          <Text style={styles.sectionCalText}> cal</Text>
        </View>
        <TouchableOpacity onPress={() => setToggleModal(true)}>
          <Plus size={30} />
        </TouchableOpacity>
      </View>
      {meals.length > 0 &&
        meals.map((meal) => <MealCard key={meal.id} {...meal} />)}

      <AddMealModal
        visible={toggleModal}
        sectionName={sectionName}
        onClose={handleModalClose}
        onAdd={handleSaveCals}
      />
    </View>
  );
}
