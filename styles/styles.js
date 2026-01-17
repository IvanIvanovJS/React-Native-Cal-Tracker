import { StyleSheet } from "react-native";

const customStyles = {
  borderColor: "#edf2f7",
  borderWidth: 2,
  borderRadius: 12,
  graySecondary: "#757575",
};

export const styles = StyleSheet.create({
  body: {
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "space-between",
    height: "100%",
  },
  header: {
    width: "100%",
    borderBottomWidth: customStyles.borderWidth,
    borderColor: customStyles.borderColor,
  },
  headerText: {
    textAlign: "center",
    fontWeight: 500,
    padding: 10,
    fontSize: 26,
  },
  section: {
    width: "90%",
    paddingHorizontal: 10,
    paddingVertical: 20,
    margin: 10,
    borderColor: customStyles.borderColor,
    borderWidth: customStyles.borderWidth,
    borderRadius: customStyles.borderRadius,
    alignContent: "center",
    flex: 1,
  },
  appBar: {
    width: "100%",
    borderTopWidth: customStyles.borderWidth,
    borderColor: customStyles.borderColor,
    alignItems: "center",
  },
  circlePlus: {
    paddingTop: 10,
    paddingBottom: 5,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sectionHeading: {
    fontSize: 20,
    fontWeight: 500,
  },
  sectionCalText: {
    color: customStyles.graySecondary,
  },
});
