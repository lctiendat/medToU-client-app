import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import Icon from 'react-native-vector-icons/Ionicons'
import { SafeAreaView } from "react-native-safe-area-context";
import Banner from './components/Banner'
import Children from './components/Children'
export default function ProductsOfCategory(params : any) {
    return <SafeAreaView style= {styles.container}>
        <View style={styles.top}>
            <Icon name="arrow-back-outline" size={24} color="#000" />
            <Text style={styles.topText}>Products Of Category</Text>
        </View>
        <Banner/>
        <Children/>
    </SafeAreaView>
};


const styles = StyleSheet.create({
   container : {
    flex : 1,
    backgroundColor : '#f5f5f5',
    paddingHorizontal : 30
   },
   top : {
    flexDirection : 'row',
    alignItems : 'center',
    paddingVertical : 20,
    paddingBottom : 10,
    marginBottom : 10
   },
   topText : {
    fontSize : 17,
    fontWeight : 'bold',
    color : '#000',
    marginLeft : 15,
   }

})
