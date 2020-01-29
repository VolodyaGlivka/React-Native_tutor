import React from 'react';
import { View, Text,Button } from 'react-native';
import styles from '../../../../styles';

const BookChapterContainer = props => {
  return (
    <View style={styles.screen}>
      <Text>BookChapterContainer</Text> 
      <Button title='Go Back' onPress={() => {
        // back to root element
        props.navigation.pop()
      }} />
    </View>
  );
};

export default BookChapterContainer;
