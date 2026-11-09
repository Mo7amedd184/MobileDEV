import { StyleSheet, Text, View, Button } from 'react-native';

import { useState } from 'react';


// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';


export default function App() {
  
  const [counter, setCounter] = useState(0);

  function handleChange(){
    console.log("You have clicked the button !");
    setCounter(counter+1);
  }

  return (
    <View style={styles.container}>
      <Card>
        <Text style={styles.container, styles.paragraph}>counter : {counter}</Text>
        <Button onPress={handleChange} title="Press the button" />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
