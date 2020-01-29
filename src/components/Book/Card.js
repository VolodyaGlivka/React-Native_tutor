import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../../../styles';
import { getTitle } from '../../utils';
const Card = ({ item, onSelect }) => (
  <TouchableOpacity style={styles['col-6']} activeOpacity={0.5} onPress={onSelect} >
    <View style={styles.gridItem}>
      <Image style={{ width: '100%', height: 180 }} resizeMode='contain' source={{ uri: item['img_url'] }} />
      <Text numberOfLines={2} style={styles.gridBookTitle}>
        {getTitle(item.title)}
      </Text>
    </View>
  </TouchableOpacity>
);

export default Card;
