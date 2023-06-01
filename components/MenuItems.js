import React from 'react';

import { View, Text, ScrollView, StyleSheet, FlatList } from 'react-native';

const menuItemsToDisplay = [
  'Hummus \n Moutabal \n Falafel \n Marinated Olives \n Kofta \n Eggplant Salad \n Lentil Burger \n Smoked Salmon \n Kofta Burger \n Turkish Kebab \n Fries \n Buttered Rice \n Bread Sticks \n Pita Pocket \n Lentil Soup \n Greek Salad \n Rice Pilaf \n Baklava \n Tartufo \n Tiramisu \n Panna Cotta',
];

const menuItemsToDisplay2 = [
  { name: 'Hummus', price: '$5.00', id: '1A' },
  { name: 'Moutabal', price: '$5.00', id: '2B' },
  { name: 'Falafel', price: '$7.50', id: '3C' },
  { name: 'Marinated Olives', price: '$5.00', id: '4D' },
  { name: 'Kofta', price: '$5.00', id: '5E' },
  { name: 'Eggplant Salad', price: '$8.50', id: '6F' },
  { name: 'Lentil Burger', price: '$10.00', id: '7G' },
  { name: 'Smoked Salmon', price: '$14.00', id: '8H' },
  { name: 'Kofta Burger', price: '$11.00', id: '9I' },
  { name: 'Turkish Kebab', price: '$15.50', id: '10J' },
  { name: 'Fries', price: '$3.00', id: '11K' },
  { name: 'Buttered Rice', price: '$3.00', id: '12L' },
  { name: 'Bread Sticks', price: '$3.00', id: '13M' },
  { name: 'Pita Pocket', price: '$3.00', id: '14N' },
  { name: 'Lentil Soup', price: '$3.75', id: '15O' },
  { name: 'Greek Salad', price: '$6.00', id: '16Q' },
  { name: 'Rice Pilaf', price: '$4.00', id: '17R' },
  { name: 'Baklava', price: '$3.00', id: '18S' },
  { name: 'Tartufo', price: '$3.00', id: '19T' },
  { name: 'Tiramisu', price: '$5.00', id: '20U' },
  { name: 'Panna Cotta', price: '$5.00', id: '21V' },
];

const Separator = () => <View style={menuStyle.separator} />;
const Header = () => <Text style={menuStyle.textStyle1}>Chart Items</Text>;
const Footer = () => <Text style={menuStyle.textStyle1}>Footer</Text>;

const ItemFunction = ({ name, price }) => {
  return (
    <View style={menuStyle.scrollView}>
    <Text style={menuStyle.itemText}>{name}</Text>
    <Text style={menuStyle.itemText}>{price}</Text>
  </View>
  );
}

//----------------------------------Statice  ScrollView----------------------------------

// const MenuItems = () => {

//   const renderItem = ({ item }) => <ItemFunction item={item} />;

//   return (
//     <View style={menuStyle.container}>
//       <ScrollView
//         indicatorStyle={"white"}
//         style={menuStyle.scrollView}>
//         <Text style={menuStyle.textStyle1}>
//           View Menu
//         </Text>
//         <Text style={menuStyle.itemText}>
//           {menuItemsToDisplay[0]}
//         </Text>
//       </ScrollView>
//     </View>
//   );
// };


//----------------------------------FlatList----------------------------------
const MenuItems = () => {

  const renderItem = ({ item }) => <ItemFunction name={item.name} price={item.price} />;

  return (
    <View style={menuStyle.container}>

        {/* <Text style={menuStyle.textStyle1}>
          View Menu
        </Text> */}

        <FlatList
         data={menuItemsToDisplay2}
         keyExtractor={item => item.id}
         renderItem={renderItem} 
         ItemSeparatorComponent={Separator}
         ListHeaderComponent={Header}
         ListFooterComponent={Footer}
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
  scrollView: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textStyle1:{
    color: 'white',
    fontSize: 40,
    flexWrap: 'wrap',
  },
  itemText: {
    color: '#F4CE14',
    fontSize: 25,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#F4CE14',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
