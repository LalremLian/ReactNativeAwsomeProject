import React, { useState } from "react";

import { View, Text, StyleSheet, SectionList, Pressable } from "react-native";

const menuItemsToDisplay = [
  {
    title: "Appetizers",
    data: [
      { name: "Hummus", price: "$5.00" },
      { name: "Moutabal", price: "$5.00" },
      { name: "Falafel", price: "$7.50" },
      { name: "Marinated Olives", price: "$5.00" },
      { name: "Kofta", price: "$5.00" },
      { name: "Eggplant Salad", price: "$8.50" },
    ],
  },
  {
    title: "Main Dishes",
    data: [
      { name: "Lentil Burger", price: "$10.00" },
      { name: "Smoked Salmon", price: "$14.00" },
      { name: "Kofta Burger", price: "$11.00" },
      { name: "Turkish Kebab", price: "$15.50" },
    ],
  },
  {
    title: "Sides",
    data: [
      { name: "Fries", price: "$3.00", id: "11K" },
      { name: "Buttered Rice", price: "$3.00" },
      { name: "Bread Sticks", price: "$3.00" },
      { name: "Pita Pocket", price: "$3.00" },
      { name: "Lentil Soup", price: "$3.75" },
      { name: "Greek Salad", price: "$6.00" },
      { name: "Rice Pilaf", price: "$4.00" },
    ],
  },
  {
    title: "Desserts",
    data: [
      { name: "Baklava", price: "$3.00" },
      { name: "Tartufo", price: "$3.00" },
      { name: "Tiramisu", price: "$5.00" },
      { name: "Panna Cotta", price: "$5.00" },
    ],
  },
];

const Separator = () => <View style={menuStyle.separator} />;
const Header = () => <Text style={menuStyle.textStyle1}>Chart Items</Text>;
const Footer = () => <Text style={menuStyle.textStyle1}>Footer</Text>;

const ItemFunction = ({ name, price }) => (
  <View style={menuStyle.innerContainer}>
    <Text style={menuStyle.itemText}>{name}</Text>
    <Text style={menuStyle.itemText}>{price}</Text>
  </View>
);

//----------------------------------SectionList----------------------------------
const MenuItems = () => {
  const [showMenu, setShowMenu] = useState(false);

  const renderItem = ({ item }) => (
    <ItemFunction name={item.name} price={item.price} />
  );

  const renderSectionHeader = ({ section: { title } }) => (
    <Text style={menuStyle.textStyle1}>{title} </Text>
  );

  return (
    <View style={menuStyle.container}>
      {!showMenu && (
        <Text style={menuStyle.infoSection}>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. View our
          menu to explore our cuisine with daily specials!
        </Text>
      )}
      <Pressable
        style={menuStyle.button}
        onPress={() => {
          setShowMenu(!showMenu);
        }}
      >
        <Text style={menuStyle.buttonText}>
          {showMenu ? "Home" : "View Menu"}
        </Text>
      </Pressable>
      {showMenu && (
        <SectionList
          keyExtractor={(item, index) => item + index}
          sections={menuItemsToDisplay}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
          ListFooterComponent={Footer}
          ItemSeparatorComponent={Separator}
        />
      )}
    </View>
  );
};

export default MenuItems;

//---------------------------------------------Styling---------------------------------------------
const menuStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  textStyle1: {
    color: "white",
    fontSize: 25,
    textAlign: "center",
  },
  itemText: {
    color: "#F4CE14",
    fontSize: 20,
  },
  separator: {
    fontSize: 80,
    borderBottomWidth: 1,
    borderColor: "#EDEFEE",
  },
  footerText: {
    color: "#EDEFEE",
    fontSize: 20,
    flexWrap: "wrap",
    textAlign: "center",
  },
  innerContainer: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#333333",
  },
  button: {
    fontSize: 18,
    padding: 10,
    marginVertical: 8,
    margin: 50,
    backgroundColor: "#EDEFEE",
    borderColor: "#EDEFEE",
    borderWidth: 2,
    borderRadius: 12,
  },
  buttonText: {
    color: "#333333",
    textAlign: "center",
    fontSize: 25,
  },
  infoSection: {
    fontSize: 18,
    padding: 20,
    marginVertical: 8,
    color: "#EDEFEE",
    textAlign: "center",
    backgroundColor: "#495E57",
  },
});
