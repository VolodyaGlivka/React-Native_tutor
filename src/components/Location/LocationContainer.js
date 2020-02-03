import React from 'react';
import { View, Text } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../HeaderButtons/HeaderButtons';

const LocationContainer = props => {
  return (
    <View>
      <Text>LocationContainer</Text>
    </View>
  );
};
LocationContainer.navigationOptions = props => {
  return {
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title='favorite'
          iconName='ios-menu'
          size={32}
          color='white'
          onPress={() => {
            props.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    )
  };
};

export default LocationContainer;
