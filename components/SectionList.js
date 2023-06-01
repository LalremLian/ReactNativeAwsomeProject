import React from 'react';

import { View, Text, StyleSheet, SectionList } from 'react-native';

const menuItemsToDisplay = [
    {
      title: 'Appetizers',
      data: [
        { name: 'Hummus', price: '$5.00' },
        { name: 'Moutabal', price: '$5.00' },
        { name: 'Falafel', price: '$7.50' },
        { name: 'Marinated Olives', price: '$5.00' },
        { name: 'Kofta', price: '$5.00' },
        { name: 'Eggplant Salad', price: '$8.50' },
      ],
    },
    {
      title: 'Main Dishes',
      data: [
        { name: 'Lentil Burger', price: '$10.00' },
        { name: 'Smoked Salmon', price: '$14.00' },
        { name: 'Kofta Burger', price: '$11.00' },
        { name: 'Turkish Kebab', price: '$15.50' },
      ],
    },
    {
      title: 'Sides',
      data: [
        { name: 'Fries', price: '$3.00', id: '11K' },
        { name: 'Buttered Rice', price: '$3.00' },
        { name: 'Bread Sticks', price: '$3.00' },
        { name: 'Pita Pocket', price: '$3.00' },
        { name: 'Lentil Soup', price: '$3.75' },
        { name: 'Greek Salad', price: '$6.00' },
        { name: 'Rice Pilaf', price: '$4.00' },
      ],
    },
    {
      title: 'Desserts',
      data: [
        { name: 'Baklava', price: '$3.00' },
        { name: 'Tartufo', price: '$3.00' },
        { name: 'Tiramisu', price: '$5.00' },
        { name: 'Panna Cotta', price: '$5.00' },
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

    const renderItem = ({ item }) => <ItemFunction name={item.name} price={item.price}/>;

    const renderSectionHeader = ({ section: { title } }) => (
      <Text style={menuStyle.textStyle1}>{title} </Text>
    );

  return (
    <View style={menuStyle.container}>

    <SectionList
        keyExtractor={(item, index) => item + index}
        sections={menuItemsToDisplay}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        ListFooterComponent={Footer}
        ItemSeparatorComponent={Separator}
        
    />

    </View>
  );
};

export default MenuItems;


//---------------------------------------------Styling---------------------------------------------
const menuStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  textStyle1:{
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
  },
  itemText: {
    color: '#F4CE14',
    fontSize: 20,
  },
  separator: {
    fontSize: 80,
    borderBottomWidth: 1,
    borderColor: '#EDEFEE',
  },
  footerText: {
    color: '#EDEFEE',
    fontSize: 20,
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  innerContainer: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#333333',
  },
});
