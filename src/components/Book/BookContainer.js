import React, { useCallback, useState } from 'react';
import { View, Text, Image, ScrollView, Alert } from 'react-native';
import styles from '../../../styles';
import { AppLoading } from 'expo';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../HeaderButtons/HeaderButtons';
import { useSelector, useDispatch } from 'react-redux';
import { getTitle } from '../../utils';

// Actions
import booksAction from '../../store/actions/books';

const BookContainer = props => {
  const bookId = props.navigation.getParam('id');
  const dispatch = useDispatch();
  const book = useSelector(state => state.books.value);
  const [bookLoaded, setBookLoaded] = useState(false);
  const onGetBook = useCallback(() => dispatch(booksAction.getSingleBook(bookId)), [dispatch]);

  if (!bookLoaded) {
    return (
      <AppLoading
        startAsync={onGetBook}
        onFinish={() => {
          setBookLoaded(true);
        }}
      />
    );
  }

  return (
    <ScrollView style={styles.screen}>
      <View>
        <Image style={{ width: '100%', height: 360 }} resizeMode='contain' source={{ uri: book.img_url }} />
        <Text>{getTitle(book.title)}</Text>
        <Text>{book.description}</Text>
      </View>
    </ScrollView>
  );
};

// this we can use if we have dynamic information
BookContainer.navigationOptions = props => {
  const bookId = props.navigation.getParam('id');

  return {
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title='favorite'
          iconName='ios-star'
          size={25}
          color='white'
          onPress={() => {
            Alert.alert('added to favorites','', [
              {
                text: 'Cancel',
                onPress: () => {},
                style: 'cancel'
              },
              { text: 'OK', onPress: () => console.log('OK Pressed') }
            ]);
          }}
        />
      </HeaderButtons>
    )
  };
};

export default BookContainer;
