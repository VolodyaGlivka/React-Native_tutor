import React, { useCallback, useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, Alert, TextInput } from 'react-native';
import styles from '../../../styles';
import { AppLoading } from 'expo';
import colors from '../../const/colors';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../HeaderButtons/HeaderButtons';
import { useSelector, useDispatch } from 'react-redux';
import { getTitle } from '../../utils';
import { Ionicons } from '@expo/vector-icons';

// Actions
import booksAction from '../../store/actions/books';

const BookContainer = props => {
  const bookId = props.navigation.getParam('id');
  const dispatch = useDispatch();
  const book = useSelector(state => state.books.value);
  const [bookItem, setBookItem] = useState({ ...book, title: getTitle(book.title) });
  const [bookLoaded, setBookLoaded] = useState(false);
  const onGetBook = useCallback(() => dispatch(booksAction.getSingleBook(bookId)), [dispatch]);

  useEffect(() => {
    setBookItem({ ...book, title: getTitle(book.title) });
  }, [book]);

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
      <View style={styles.bookContainer}>
        <View style={styles.bookImageContainer}>
          <Image style={{ width: '100%', height: '95%' }} resizeMode="contain" source={{ uri: bookItem.img_url }} />
          <View style={styles.cameraContainer}>
            <Ionicons name="ios-camera" size={25} color={colors.secondary} />
          </View>
        </View>
        <View style={styles.row}>
          <Text style={styles.bookTitle}>{bookItem.title}</Text>
          {/* <TextInput
            value={bookItem.title}
            onChangeText={title => setBookItem({ ...bookItem, title })}
            keyboardType="default"
            style={styles.bookTitle}
            onSubmitEditing={() =>
              Alert.alert('Changes!', 'Are you sure you want to rename this book?', [
                {
                  text: 'Cancel',
                  onPress: () => {},
                  style: 'cancel'
                },
                { text: 'OK', onPress: () => {} }
              ])
            }
          /> */}
        </View>
        <Text style={styles.bookDescription}>{bookItem.description}</Text>
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
          title="favorite"
          iconName="ios-star"
          size={25}
          color="white"
          onPress={() => {
            Alert.alert('Added to favorites', '', [{ text: 'OK', onPress: () => console.log('OK Pressed') }]);
          }}
        />
      </HeaderButtons>
    )
  };
};

export default BookContainer;
