import { View, Text, StyleSheet } from 'react-native'
import { withDecay } from 'react-native-reanimated';

export default function CardWinesCarousel() {
    return (
        <View style = {styles.container}>
            <View style = {styles.discount}>
            <Text style = {styles.TextDiscount}>20% OFF</Text>
            </View>
            <View style ={styles.ContainerTitleExperience}>
            <Text style = {styles.TitleExperience}>CABERNET EXPERIENCE</Text>
            </View>
            <View style ={styles.ContainerPriceExperience}>
            <Text style = {styles.PriceExperience}>$38.675</Text>
            </View>
        </View>
    );
}   

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffffff',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        marginBottom:250,
        borderRadius: 10,
        },
        discount: {
            position: 'absolute',
            top: 10,
            left: 11,
            backgroundColor: '#b8983bff',
            borderWidth: 1,
            borderRadius: 5,
            padding: 13,
            width: 80,
            height: 30,
            paddingTop: 2,
        },
        TextDiscount: {
            color: '#ffffffff',
            fontWeight: '700',
            fontSize: 11,
            paddingLeft: 5,
            textAlign: 'center',
        },
        ContainerTitleExperience: {
            position: 'absolute',
            top: 50,
            width: 250,   
            left: 11, 
 },
        TitleExperience: {
            position: 'absolute',
            fontSize: 15,
            fontWeight: '700',
        },
ContainerPriceExperience: {
    position: 'absolute',
    top: 75,
    width: 250,
    left: 11,
},
PriceExperience: {
    position: 'absolute',
    fontSize: 20,
    fontWeight: '700',
},
});
