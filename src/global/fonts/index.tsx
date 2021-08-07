import React from "react"
import AppLoading from 'expo-app-loading'

interface FontProviderProps {
  children: React.ReactNode
}

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

export function FontsProvider({children}: FontProviderProps){
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  })

  if(!fontsLoaded){
    return <AppLoading/>
  }
  
  return (
    <>
    {children}
    </>
  )
}