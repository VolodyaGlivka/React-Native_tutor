import React, { useState } from 'react';
import { View, Text, ActivityIndicator, Alert, Button, Image, TouchableOpacity } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../HeaderButtons/HeaderButtons';
import * as Location from 'expo-location';
import * as AskPermissions from 'expo-permissions';
import styles from '../../../styles';

const LocationContainer = props => {
  const [location, setLocation] = useState({ lat: 0, lng: 0 });
  const [isLoading, setIsLoading] = useState(false);
  const [isLocationLoaded, setIsLocationLoaded] = useState(false);
  const uri = `https://maps.googleapis.com/maps/api/staticmap?center=${location.lat},${location.lng}&zoom=14&size=600x500&maptype=roadmap
  &markers=color:red%7Clabel:C%7C${location.lat},${location.lng}&key=AIzaSyD6dTFQovWvxfcuOqfS5GqLceW7Np2rKIg`;

  const verifyPermissions = async () => {
    const result = await AskPermissions.askAsync(AskPermissions.LOCATION);
    if (result.status !== 'granted') {
      Alert.alert('Permission denied', 'You need to allow use your Geolocation', [{ text: 'Ok' }]);
      return false;
    }
    return true;
  };

  const locationHandler = async () => {
    const hasPermissions = await verifyPermissions();
    if (!hasPermissions) {
      return;
    }
    try {
      setIsLoading(true);
      const locationPoint = await Location.getCurrentPositionAsync({ timeout: 5000 });
      console.log(locationPoint);
      setLocation({ lat: locationPoint.coords.latitude, lng: locationPoint.coords.longitude });
      setIsLocationLoaded(true);
    } catch (err) {
      Alert.alert('Error!', "Can't get your position", [{ text: 'Ok' }]);
    }
    setIsLoading(false);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.locationContainer}>
        {isLocationLoaded && location ? (
          <View>
            <TouchableOpacity
              activeOpacity={0.8}
              style={{ width: '100%', height: 320 }}
              onPress={() => props.navigation.navigate({ routeName: 'MapPreview', params: { location } })}
            >
              <Image style={{ width: '100%', height: '100%' }} source={{ uri: uri }} />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={{ width: '100%', height: 320 }}>
            {isLoading ? <ActivityIndicator /> : <Text>Location Picker</Text>}
          </View>
        )}

        <Button title='Get user Location' onPress={locationHandler} />
      </View>
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
