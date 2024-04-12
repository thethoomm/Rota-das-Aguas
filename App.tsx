import Routes from '@/routes';
import { Inter_100Thin as InterThin, Inter_400Regular as InterRegular, Inter_500Medium as InterMedium, Inter_600SemiBold as InterSemibold, Inter_700Bold as InterBold, Inter_800ExtraBold as InterExtrabold } from '@expo-google-fonts/inter';
import { useFonts } from 'expo-font';

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    InterThin,
    InterRegular,
    InterMedium,
    InterSemibold,
    InterBold,
    InterExtrabold
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  

  return (
    <Routes/>
  )
}