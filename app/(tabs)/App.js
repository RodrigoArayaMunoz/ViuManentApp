import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../Component/header';
import ImagesCarousel from '../../Component/ImagesCarousel';

export default function App() {
  return (
    
    <>
    <Header></Header>
    <ImagesCarousel></ImagesCarousel>
    </>
  )
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#ffffffff',
  },
};
