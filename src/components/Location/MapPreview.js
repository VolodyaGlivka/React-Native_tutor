import React from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapPreviewContainer = props => {
  const location = props.navigation.getParam('location');
  const mapRegions = {
    latitude: location.lat,
    longitude: location.lng,
    latitudeDelta: 0.0922,
    longitude: 0.0421
  };
  const [selectedLocation, setSelectedLocation] = React.useState(location);

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
  return (
    <View style={{ flex: 1 }}>
      <MapView style={{ flex: 1 }} region={mapRegions} onPress={handleSetMarker}>
        {markerCoordinate && <Marker title='title' coordinate={markerCoordinate} />}
      </MapView>
    </View>
  );
};

export default MapPreviewContainer;
