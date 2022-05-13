import { View, ScrollView } from 'react-native'

const inventorData = require('./tp.json');

import InventorPanel from './InventorPanel';

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

