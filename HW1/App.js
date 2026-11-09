import { StyleSheet, Text, View } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';


const BookCard = (props) => {
  const title = props.title;
  const author = props.author;
  let price = props.price;
  let discount = (props.discount * price);
  let isAvailable = props.isAvailable;

  let disPrice = (price - discount);

  return(
    <View style={{gap:10}}> 
      <Text style={{fontWeight:'bold', fontSize: 24}}>{title} </Text>
      <Text>by {author} </Text>
      <Text>Price: {price}$ </Text>
      <Text>After discount : {disPrice}$ </Text>
      <Text style={{fontWeight:'bold', fontSize:16}}>{isAvailable === true ? '' : 'Not '}Available </Text>
    
    </View>
  );

};


export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={{flex:1, marginTop:24}}> 
        <Text style={styles.title}>My Library</Text>
        <Text style={{textAlign:'center'}}> First React App </Text>
      </View>
      
      <View style={{flex:3, gap:10}}>

        <Card style={styles.card}>
          <BookCard title="Clean Code" author='Mohammed Ahmed' price={100} discount={0.1} isAvailable={true} />
        </Card>

        <Card style={styles.card}>
          <BookCard title='JavaScript Basics' author='Sara Ali' price={25} discount={0.2} isAvailable={false}/>
        </Card>

        <Card style={styles.card}>
          <BookCard title='Learning React Native' author='Ahmed Saeed' price={30} discount={0} isAvailable={true} />
        </Card>

        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'space-between',
    padding: 8,
  },

  title: {
    margin: 24,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card:{
    padding: 10,
    borderWidth: 4,
    borderRadius: 20,
    justifyContent: 'space-around',
    borderColor: 'blue',
    backgroundColor: 'lightblue',
  },

  cardText:{
    fontWeight: 'bold',
  },

});
