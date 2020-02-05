import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../HeaderButtons/HeaderButtons';

const MapPreviewContainer = props => {
  const location = props.navigation.getParam('location');
  const [selectedLocation, setSelectedLocation] = React.useState(location);

  const mapRegions = {
    latitude: selectedLocation.lat || location.lat,
    longitude: selectedLocation.lng || location.lng,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  };

  const handleSetMarker = event => {
    setSelectedLocation({
      lat: event.nativeEvent.coordinate.latitude,
      lng: event.nativeEvent.coordinate.longitude
    });
  };

  let markerCoordinate;

  if (selectedLocation) {
    markerCoordinate = {
      latitude: selectedLocation.lat,
      longitude: selectedLocation.lng
    };
  }
  const savePickedLocation = React.useCallback(() => {
    if (!selectedLocation) {
      return;
    }
    props.navigation.navigate('Location', { pickedLocation: selectedLocation });
  }, [selectedLocation]);

  React.useEffect(() => {
    props.navigation.setParams({ saveLocation: savePickedLocation });
  }, [savePickedLocation]);

  return (
    <View style={{ flex: 1 }}>
      <MapView style={{ flex: 1 }} region={mapRegions} onPress={handleSetMarker}>
        {markerCoordinate && <Marker title='title' coordinate={markerCoordinate} />}
      </MapView>
    </View>
  );
};
MapPreviewContainer.navigationOptions = props => {
  const saveLocation = props.navigation.getParam('saveLocation');
  return {
    headerRight: () => (
      <TouchableOpacity onPress={saveLocation}>
        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
          <Item title='favorite' iconName='ios-save' size={25} color='white' />
        </HeaderButtons>
      </TouchableOpacity>
    )
  };
};

export default MapPreviewContainer;
