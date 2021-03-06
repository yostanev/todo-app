import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, FlatList, Alert, TouchableOpacity} from 'react-native';

const Welcome = props => {
  return (
      <View style={styles.view}>
          <TouchableOpacity 
            style={styles.date_btn}
            onPress={() => {props.changeScreenParam('0');props.setdataparam('21 January 2022')}}>
              <Text style={styles.date_btnText}>
				  21 January 2022
              </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.date_btn}
            onPress={() => {props.changeScreenParam('0');props.setdataparam('22 January 2022')}}>
              <Text style={styles.date_btnText}>
				  22 January 2022
              </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.date_btn}
            onPress={() => {props.changeScreenParam('0');props.setdataparam('23 January 2022')}}>
              <Text style={styles.date_btnText}>
				  23 January 2022
              </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.date_btn}
            onPress={() => {props.changeScreenParam('0');props.setdataparam('24 January 2022')}}>
              <Text style={styles.date_btnText}>
				  24 January 2022
              </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.date_btn}
            onPress={() => {props.changeScreenParam('0');props.setdataparam('25 January 2022')}}>
              <Text style={styles.date_btnText}>
				  25 January 2022
              </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.date_btn}
            onPress={() => {props.changeScreenParam('0');props.setdataparam('26 January 2022')}}>
              <Text style={styles.date_btnText}>
				  26 January 2022
              </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.date_btn}
            onPress={() => {props.changeScreenParam('0');props.setdataparam('27 January 2022')}}>
              <Text style={styles.date_btnText}>
				  27 January 2022
              </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.date_btn}
            onPress={() => {props.changeScreenParam('0');props.setdataparam('28 January 2022')}}>
              <Text style={styles.date_btnText}>
				  28 January 2022
              </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.date_btn}
            onPress={() => {props.changeScreenParam('0');props.setdataparam('29 January 2022')}}>
              <Text style={styles.date_btnText}>
				  29 January 2022
              </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.date_btn}
            onPress={() => {props.changeScreenParam('0');props.setdataparam('30 January 2022')}}>
              <Text style={styles.date_btnText}>
				  30 January 2022
              </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.date_btn}
            onPress={() => {props.changeScreenParam('0');props.setdataparam('31 January 2022')}}>
              <Text style={styles.date_btnText}>
				  31 January 2022
              </Text>
          </TouchableOpacity>
		  
      </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'darkslateblue',
    fontSize: 30,
    textAlign: 'center',
  },
  date_btn: {
    backgroundColor: '#FFCE00',
    padding: 9,
    margin: 5,
    borderRadius: 50,
    borderWidth: 1,
  },
  date_btnText: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
  view: {
    flex: 1,
    justifyContent: 'center'
  }
});

export default Welcome;