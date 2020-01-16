import React, { useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Button, FlatList } from 'react-native';
import styles from '../../../styles';

// Actions
import booksAction from '../../store/actions/books';

//Custom components
import Card from '../Book/Card';

const HomeContainer = props => {
  const dispatch = useDispatch();
  const books = useSelector(state => state.books.list);

  const onGetBooks = useCallback(() => dispatch(booksAction.getBooks()), [dispatch]);

  useMemo(() => {
    onGetBooks();
  }, [onGetBooks]);

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <FlatList
          keyExtractor={item => item._id}
          numColumns={2}
          data={books.data}
          renderItem={({ item }) => <Card item={item} props={props} />}
        />
      </View>
      <Button
        title="Go to Book"
        onPress={() => {
          // also we can use props.navigation.navigate('Book');
          // also we can use props.navigation.push('Book'); but in this case it will be added to stack
          // also we can use props.navigation.replace('Book'); but in this case it will be replaced Home to Book
          props.navigation.navigate({ routeName: 'Book' });
        }}
      />
    </View>
  );
};

HomeContainer.navigationOptions = {
  headerTitle: "Home Page",
  headerStyle: {
    backgroundColor: '#ff6f00'
  },
  headerTintColor: 'white'
}

export default HomeContainer;
