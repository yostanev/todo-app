import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/fontawesome';

const AddItem = ({addItem}) => {
  const [text, setText] = useState('');
  const onChange = textValue => setText(textValue);

  return (
    <View>
      <TextInput placeholder="Add Item..." style={styles.input_text} onChangeText={onChange} value={text}/>
      <TouchableOpacity style={styles.Add_btn} onPress={() => {addItem(text); setText(''); }}>
        <Text style={styles.Add_btnText}>
          <Icon name="plus" size={20} /> Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input_text: {
    height: 60,
    padding: 8,
    margin: 5,
  },
  Add_btn: {
    backgroundColor: '#FFCE00',
    padding: 9,
    margin: 5,
  },
  Add_btnText: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AddItem;