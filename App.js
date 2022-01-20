import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Alert} from 'react-native';
import EditScreen from './screens/Edit';
import WelcomeScreen from './screens/Welcome';


const App = () => {
  const [currentScreen, setCurrentScreen] = useState('1');
  const[data,setdata]=useState('');

  let content = <WelcomeScreen changeScreenParam={setCurrentScreen} setdataparam={setdata}/>;

  if (currentScreen !== '1') {
    content = <EditScreen changeScreenParam={setCurrentScreen} getdataparam={data}/>
  }

  return (
    <View>
       <div>
        <header style={css.header}>
          <h1 style={css.title}>Todo<span style={css.light}>App</span></h1>
        </header>
       </div>
       {content}
    </View>
  );
};

const css = {
	header: {
		backgroundColor: "#171717",
		padding: "1em"
	},
	title: {
		color: "#FFCE00",
		fontSize: "2.8em",
		textAlign: "center",
		textTransform: "uppercase"
	},
	light: {
		color: "#F3F3F3",
		fontWeight: "300"
	},
	inputBar: {
		display: "flex",
		height: "3.5em"
	},
	input: {
		flex: "10",
		padding: "0",
		margin: "0",
		fontSize: "1.8em",
		border: "none",
		borderBottom: "3px solid #FFCE00",
		textIndent: "0.5em"
	},
	addBtn: {
		flex: "2",
		fontSize: "1.15em",
		backgroundColor: "#FFCE00",
		border: "none",
		outline: "none",
		cursor: "pointer"
	}
}

export default App;