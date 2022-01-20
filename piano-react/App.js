import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Alert} from 'react-native';
import PianoScreen from './screens/Piano';
import WelcomeScreen from './screens/Welcome';


const App = () => {
  const [welcomeScreen, setCurrentScreen] = useState('W');


  let content = <WelcomeScreen changeScreenParam={setCurrentScreen}/>;

  if (welcomeScreen === 'P') {
    content = <PianoScreen changeScreenParam={setCurrentScreen}/>
  }

  return (
    <View>
       <div>
        <header style={css.header}>
          <h1 style={css.title}>PIANO</h1>
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
		color: "#FFF",
		fontSize: "2.8em",
		textAlign: "center",
		textTransform: "uppercase"
	},
	// light: {
	// 	color: "#F3F3F3",
	// 	fontWeight: "300"
	// },
	// inputBar: {
	// 	display: "flex",
	// 	height: "3.5em"
	// },
	// input: {
	// 	flex: "10",
	// 	padding: "0",
	// 	margin: "0",
	// 	fontSize: "1.8em",
	// 	border: "none",
	// 	borderBottom: "3px solid #FFCE00",
	// 	textIndent: "0.5em"
	// },
	// addBtn: {
	// 	flex: "2",
	// 	fontSize: "1.15em",
	// 	backgroundColor: "#FFCE00",
	// 	border: "none",
	// 	outline: "none",
	// 	cursor: "pointer"
	// }
}

export default App;