import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, TouchableOpacity, Modal } from 'react-native';

export default function App() {
  const [goalList, setGoalList] = useState([]);
  const [goalItem, setGoalitem] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const goalInputhandler = goalInputItem => {
    setGoalitem(goalInputItem);
  };
  const addGoallHandler = () => {
    setGoalList([...goalList, { id: Math.random().toString(), value: goalItem }]);
    setIsModalVisible(false);
    setGoalitem('');
  };
  const onDelete = id => {
    const newArr = goalList.filter(goal => goal.id !== id);
    setGoalList([...newArr]);
  };
  const closeModal = () => {
    setIsModalVisible(false);
    setGoalitem('');
  }
  return (
    <View style={styles.container}>
      <Button title="Open Modal" onPress={() => setIsModalVisible(true)} />
      <Modal visible={isModalVisible} animationType="slide">
        <View style={{ ...styles.flex, ...styles.padding30 }}>
          <TextInput placeholder="Enter goal" value={goalItem} onChangeText={goalInputhandler} />
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
            <Button title="Add" onPress={addGoallHandler} />
            <Button title="Close" color="red" onPress={closeModal} />
          </View>
        </View>
      </Modal>
      <FlatList
        data={goalList}
        keyExtractor={(item, index) => item.id}
        renderItem={itemData => (
          <TouchableOpacity activeOpacity={0.8} onPress={() => onDelete(itemData.item.id)}>
            <View
              style={{ padding: 15, marginVertical: 10, borderWidth: 1, borderColor: 'black', backgroundColor: '#ccc' }}
            >
              <Text>{itemData.item.value}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30
  },
  flex: {
    display: 'flex'
  },
  padding30: {
    padding: 30
  }
});
