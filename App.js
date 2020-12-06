import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import MealsNavigator from './Navigation/MealsNavigator';
import { enableScreens } from 'react-native-screens'

enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./Assets/Fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./Assets/Fonts/OpenSans-Bold.ttf')
  });
}

export default function App() {
  const [ dataLoaded, setDataLoaded ] = useState(false);

  // Loading Screen if the data in fetchFonts (Must be a promise) has not been loaded
  if (!dataLoaded) {
    return <AppLoading 
      startAsync={fetchFonts} 
      onFinish={() => setDataLoaded(true)} 
      onError={() => console.log("Error in App Loading")} />;
  }

  return (
    <MealsNavigator />
  );
}
