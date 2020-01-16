import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../../../styles';

const BookContainer = props => {
  return (
    <View style={styles.screen}>
      <Text>BookContainer</Text>
      <Button
        title="Go to Chapter"
        onPress={() => {
          // also we can use props.navigation.pop();
          props.navigation.navigate('BookChapter');
        }}
      />
      <Button
        title="Go Back"
        onPress={() => {
          // also we can use props.navigation.pop();
          props.navigation.goBack();
        }}
      />
    </View>
  );
};

export default BookContainer;
