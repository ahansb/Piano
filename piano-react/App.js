import React, {useState} from 'react';
import {View} from 'react-native';
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
	}
}

export default App;