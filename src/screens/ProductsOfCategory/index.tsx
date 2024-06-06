import { ScrollView, StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import Icon from 'react-native-vector-icons/Ionicons'
import { SafeAreaView } from "react-native-safe-area-context";
import Banner from './components/Banner'
import Children from './components/Children'
import Product from './components/Product'
import Header from './components/Header'
export default function ProductsOfCategory({ navigation }: any) {
    return <SafeAreaView style={styles.container}>
        <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            nestedScrollEnabled={true}
        >
            <Header navigation={navigation} />
            <Banner />
            <Children />
            <Product navigation={navigation} />
        </ScrollView>
    </SafeAreaView>
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingHorizontal: 30
    },

})
