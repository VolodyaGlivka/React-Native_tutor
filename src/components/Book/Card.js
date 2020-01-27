import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../../../styles';
const Card = ({ item, onSelect }) => (
  <TouchableOpacity style={styles['col-6']} activeOpacity={0.8} onPress={onSelect}>
    <View>
      <Image style={{ width: '100%', height: 180 }} resizeMode='contain' source={{ uri: item['img_url'] }} />
      <Text>{item.title}</Text>
    </View>
  </TouchableOpacity>
);

export default Card;
