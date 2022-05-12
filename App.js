import { StyleSheet, Text, View, Image, ScrollView, FlatList } from 'react-native'

const inventorData = require('./tp.json');

export default function App() {

  return (

    <ScrollView>
      <View>
        {inventorData.map((elt) => (
          <InventorPanel imageLink={elt.img} inventorName={elt.title} description={elt.desc}></InventorPanel>
        ))}
      </View>
    </ScrollView>
  )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 20
  },
  eachContainer: {
    padding: 25,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  nameContainer: {
    flex: 1,
    paddingLeft: 20,
    flexDirection: 'column',
  },
  descContainer: {
    flex: 1,
  },
  image: {
    width: 150,
    height: 150
  },
  title: {
    textAlign: 'center'
  },
  description: {
    textAlign: 'justify'
  }
})

const InventorPanel = (props) => {
  const { imageLink } = props;
  const { inventorName } = props;
  const { description } = props;
  return (
    <View style={styles.container}>
      <View style={styles.eachContainer}>
        <View style={styles.imageContainer}>
          <Image source={{uri : imageLink}} style={styles.image} />
          <View style={styles.nameContainer}>
            <Text style={styles.title}> {inventorName} </Text>
            <View style={styles.descContainer}>
              <Text style={styles.description}>{description}</Text>
            </View>
          </View>
        </View>
      </View>
    </View >
  )}
