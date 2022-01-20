import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Alert, Button, TouchableOpacity, Text} from 'react-native';
import ListItem from '../components/ListItem';
import AddItem from '../components/AddItem';

const styles = StyleSheet.create({
  text: {
    color: '#FFCE00',
    fontSize: 30,
    textAlign: 'left',
  },
  data: {
    color: 'black',
    fontSize: 40,
    textAlign: 'center',
  },
  backText: {
    color: 'darkslateblue',
    textAlign: 'center',
  },
  back_btn: {
    color: '#FFCE00',
    textAlign: 'center',
    padding: 9,
	fontSize: 30,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  }
});

const Edit = props => {
  const [items, setItems] = useState([
    {
      id: Math.random(),
      text: 'Prepare breakfast',
    },
    {
      id: Math.random(),
      text: 'Iron shirt',
    },
    {
      id: Math.random(),
      text: 'Get new mask',
    }
  ]);

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id);
    });
  };
  
  const addItem = text => {
    if (!text) {
      alert('No item entered');
    } else {
      setItems(prevItems => {
        return [{id: Math.random(), text}, ...prevItems];
      });
    }
  };

  return (
      <View>
        <Text style={styles.data}> {props.getdataparam}</Text>
        <AddItem addItem={addItem} />
        <FlatList
          data={items}
          renderItem={({item}) => (
            <ListItem
              item={item}
              deleteItem={deleteItem}
            />
          )}
        />
        <TouchableOpacity onPress={() => props.changeScreenParam('1')}>
        <Text style={styles.back_btn} >Back</Text>
        </TouchableOpacity>
      </View>
  );
};

export default Edit;