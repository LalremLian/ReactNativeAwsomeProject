import * as React from 'react';
import { View, Text } from 'react-native';

export default function LittleLemonFooter() {
  return (
    <View
      style={{
        backgroundColor: '#F4CE14',
        marginBottom: 0,
      }}>
      <Text
        style={{
          fontSize: 16,
          color: 'black',
          textAlign: 'center',
        }}>
        All rights reserved by Calvert, 2023
      </Text>
    </View>
  );
}