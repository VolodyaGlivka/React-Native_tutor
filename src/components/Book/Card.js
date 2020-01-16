import React from 'react';
import { View, Text,Image } from 'react-native';
import styles from '../../../styles';
const Card = ({ item }) => (
  <View style={styles['col-6']}>
    <Image style={{ width: '100%', height: 180 }} resizeMode="contain" source={{ uri: item['img_url'] }} />
    <Text>{item.title}</Text>
  </View>
);

export default Card;
