import { StyleSheet, Text, View, Image } from 'react-native';

const InventorPanel = (props) => {
    const { imageLink } = props;
    const { inventorName } = props;
    const { description } = props;
    return (
        <View style={styles.container}>
            <View style={styles.eachContainer}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: imageLink }} style={styles.image} />
                    <View style={styles.nameContainer}>
                        <Text style={styles.title}> {inventorName} </Text>
                        <View style={styles.descContainer}>
                            <Text style={styles.description}>{description}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View >
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

export default InventorPanel;