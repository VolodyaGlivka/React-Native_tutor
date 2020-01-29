import React, { useCallback, useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, Alert, ActivityIndicator, TouchableNativeFeedback } from 'react-native';
import styles from '../../../styles';
import { AppLoading } from 'expo';
import colors from '../../const/colors';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../HeaderButtons/HeaderButtons';
import { useSelector, useDispatch } from 'react-redux';
import { getTitle, getDescription } from '../../utils';
import { Ionicons } from '@expo/vector-icons';

// Actions
import booksAction from '../../store/actions/books';

const BookContainer = props => {
  const [isLoading, setIsLoading] = useState(true);
  const bookId = props.navigation.getParam('id');
  const dispatch = useDispatch();
  const book = useSelector(state => state.books.value);
  const [bookItem, setBookItem] = useState({
    ...book,
    title: getTitle(book.title),
    description: getDescription(book.description)
  });

  const onGetBook = useCallback(async () => {
    setIsLoading(true);
    try {
      await dispatch(booksAction.getSingleBook(bookId));
    } catch (err) {
      console.log('error');
    }
    setIsLoading(false);
  }, [dispatch, setIsLoading]);

  // this we use to re-render when we go to this page via navigation
  useEffect(() => {
    const willFocusSub = props.navigation.addListener('willFocus', () => {
      onGetBook();
    });
    return () => {
      willFocusSub.remove();
    };
  }, [onGetBook]);

  useEffect(() => {
    setBookItem({ ...book, title: getTitle(book.title), description: getDescription(book.description) });
  }, [book]);

  useEffect(() => {
    onGetBook();
  }, [dispatch, onGetBook]);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.bookContainer}>
        <View style={styles.bookImageContainer}>
          <Image style={{ width: '100%', height: 320 }} resizeMode='contain' source={{ uri: bookItem.img_url }} />
          <View style={styles.cameraContainer}>
            <Ionicons name='ios-camera' size={25} color={colors.secondary} />
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
        <View style={{ ...styles.row, justifyContent: 'center' }}>
          <TouchableNativeFeedback
            onPress={() => props.navigation.navigate({ routeName: 'BookChapter', params: { id: bookItem._id } })}
          >
            <Text style={styles.startReadButton}>Start read</Text>
          </TouchableNativeFeedback>
        </View>
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
            Alert.alert('Added to favorites', '', [{ text: 'OK', onPress: () => console.log('OK Pressed') }]);
          }}
        />
      </HeaderButtons>
    )
  };
};

export default BookContainer;
