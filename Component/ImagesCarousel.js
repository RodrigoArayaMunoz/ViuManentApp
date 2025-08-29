import React from 'react';
import { View, Dimensions, StyleSheet, Image, Text} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const { width } = Dimensions.get('window');

const ImageCarousel = () => {
  const items = [
    {
        image: require('../assets/ImagesCarousel/Tour1.webp'),
        title: "TOUR ICONO PRIVATE EXPERIENCE"
    },
    {
        image: require('../assets/ImagesCarousel/Tour2.webp'),
        title: "TOUR VINOS DE LUJO"
    },
    {
        image: require('../assets/ImagesCarousel/Tour3.webp'),
        title: "E.BIKE TOUR"
    },
    {
        image: require('../assets/ImagesCarousel/Tour4.webp'),
        title: "TOUR CAMINATA POR EL VIÑEDO"
    },
    {
        image: require('../assets/ImagesCarousel/Tour5.webp'),
        title: "TOUR EN CARRUAJE"
    },
    {
        image: require('../assets/ImagesCarousel/Tour6.webp'),
        title: "TOUR DEL ATARDECER"
    },
    ];


  return (
    <View style={styles.carouselContainer}>
      <Carousel
        width={width * 0.80}
        height={265}
        autoPlay={true}
        data={items}
        scrollAnimationDuration={1000}
        mode="parallax"
        autoPlayInterval={3000}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <Image source={item.image} style={styles.image} resizeMode="cover" />
            <Text style={styles.title}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    marginBottom:80,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#ffffffff',
  },
  slide: {
    height: "100%",
    alignItems: 'center',
    width: "100%",
    justifyContent: 'center',
  },
  image: {
    width: "95%",
    height: "90%",
    borderColor: '#b8983bff',
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: '#ffffffff',
  },
    title: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: '600',
    color: '#b8983bff',
  },
});

export default ImageCarousel;
