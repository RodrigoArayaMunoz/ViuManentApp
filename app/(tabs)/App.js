import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../Component/header';
import ImagesCarousel from '../../Component/ImagesCarousel';
import CardWinesCarousel from '../../Component/CardWinesCarousel';

export default function App() {
  return (
    
    <>
    <Header></Header>
    <ImagesCarousel></ImagesCarousel>
    <CardWinesCarousel></CardWinesCarousel>
    </>
  )
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#ffffffff',
  },
};
