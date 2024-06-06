import { ScrollView, StyleSheet, View } from "react-native";
import { Image, Text } from "react-native-elements";

export default function index(params: any) {
    return <View style={styles.container}>
    <Text style={styles.title}>Diabetic Diet</Text>
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scrollView} nestedScrollEnabled={true}
>
      <View style={styles.card}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }} // replace with your image URL
          style={styles.image}
        />
        <Text style={styles.cardText}>Sugar Substitute</Text>
      </View>
      <View style={styles.card}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }} // replace with your image URL
          style={styles.image}
        />
        <Text style={styles.cardText}>Juices & Vinegars</Text>
      </View>
      <View style={styles.card}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }} // replace with your image URL
          style={styles.image}
        />
        <Text style={styles.cardText}>Vitamins Medicines</Text>
      </View>
    </ScrollView>
  </View>
};

const styles = StyleSheet.create({
container: {
    paddingVertical:20
},
title: {
  fontSize: 18,
  fontWeight: 'bold',
  color: '#000',
  marginBottom: 10,
},
scrollView: {
  flexDirection: 'row',
},
card: {
  backgroundColor: 'white',
  borderRadius: 10,
  marginRight: 10,
  overflow: 'hidden',
  width: 150,
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
},
image: {
  width: '100%',
  height: 150,
  resizeMode: 'cover',
},
cardText: {
  padding: 10,
  textAlign: 'center',
  color: '#000',
  fontWeight: '500',
},
});
