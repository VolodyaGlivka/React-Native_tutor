import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../../../styles';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../HeaderButtons/HeaderButtons';

const BookContainer = props => {
  const bookId = props.navigation.getParams('id');
  return (
    <View style={styles.screen}>
      <Text>BookContainer</Text>
      <Button
        title='Go to Chapter'
        onPress={() => {
          // also we can use props.navigation.pop();
          props.navigation.navigate('BookChapter');
        }}
      />
      <Button
        title='Go Back'
        onPress={() => {
          // also we can use props.navigation.pop();
          props.navigation.goBack();
        }}
      />
    </View>
  );
};

// this we can use if we have static information
// BookContainer.navigationOptions = {
//   headerTitle: "Book Page",
//   headerStyle: {
//     backgroundColor: '#ff6f00'
//   },
//   headerTintColor: 'white'
// }

// this we can use if we have dynamic information
BookContainer.navigationOptions = props => {
  const bookId = props.navigation.getParams('id');
  return {
    headerTitle: bookId,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item title='favorite' iconName='ios-star' onPress={()=>{}} />
      </HeaderButtons>
    )
  };
};

export default BookContainer;
