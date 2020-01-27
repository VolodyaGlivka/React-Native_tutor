import React, { useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Button, FlatList, Text } from 'react-native';
import styles from '../../../styles';

// Actions
import booksAction from '../../store/actions/books';

//Custom components
import Card from '../Book/Card';

const FavoriteContainer = props => {
  const dispatch = useDispatch();
  const books = useSelector(state => state.books.list);

  const onGetBooks = useCallback(() => dispatch(booksAction.getBooks()), [dispatch]);

  useMemo(() => {
    onGetBooks();
  }, [onGetBooks]);

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        {/* <FlatList
          keyExtractor={item => item._id}
          numColumns={2}
          data={books.data}
          renderItem={({ item }) => (
            <Card
              item={item}
              onSelect={() => props.navigation.navigate({ routeName: 'Book', params: { id: item.id } })}
            />
          )}
        /> */}
        <Text>FavoriteContainer</Text>
      </View>
    </View>
  );
};

FavoriteContainer.navigationOptions = {
  headerTitle: () => 'FavoriteContainer Page',
  headerStyle: {
    backgroundColor: '#ff6f00'
  },
  headerTintColor: 'white'
};

export default FavoriteContainer;
