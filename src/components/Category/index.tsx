import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-elements";
import Icon from 'react-native-vector-icons/Ionicons';


export interface ICate {
    label: string;
    img: string;
}

const categories = [
    { id: '1', name: 'Dental', icon: 'mail', color: '#FF6F61' },
    { id: '2', name: 'Wellness', icon: 'mail', color: '#8CC63F' },
    { id: '3', name: 'Homeo', icon: 'mail', color: '#F79256', iconType: 'MaterialCommunityIcons' },
    { id: '4', name: 'Eye care', icon: 'mail', color: '#4A90E2' },
    { id: '5', name: 'Skin & Hair', icon: 'mail', color: '#4A4A4A', iconType: 'MaterialIcons' },
];

const renderCategoryItem = ({ item, navigation }: any) => (
    <TouchableOpacity onPress={() => navigation.navigate('ProductsOfCategoryScreen')}>
        <View style={styles.categoryItem}>
            <View style={styles.wrap_icon}>
                <Icon name={item.icon} size={24} color={item.color} />
            </View>
            <Text style={styles.categoryText}>{item.name}</Text>
        </View>
    </TouchableOpacity>
);

export default function Category({ navigation }) {
    return (
        <View>
            <Text style={styles.title}>Top Categories</Text>
            <FlatList
                data={categories}
                renderItem={({ item }) => renderCategoryItem({ item, navigation })}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.categoryList}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    title: {
        marginTop: 0,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    categoryList: {
        paddingRight: 30,
    },
    categoryItem: {
        backgroundColor: 'white',
        borderRadius: 30,
        padding: 10,
        alignItems: 'center',
        // justifyContent: 'center',
        marginRight: 20,
        height: 120,
        width: 70
    },
    categoryText: {
        marginTop: 5,
        fontSize: 12,
        fontWeight: 'bold',
        color: '#333',
    },
    wrap_icon: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginRight: 10,
        marginBottom: 10,
        marginTop: 10,
        marginLeft: 10,
        borderWidth: 1,
        borderColor: '#fff',
        overflow: 'hidden',
    }
});