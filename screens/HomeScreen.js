import { useState,useEffect,useCallback } from "react";
import { View, Text } from "react-native";
import {styles} from "..styles/homescreen";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Lobster_400Regular } from "@expo-google-fonts/lobster";
import { Philosopher_700Bold } from "@expo-google-fonts/philosopher";
import { SafeArea} from "../utilities/AreaView";

export function HomeScreen (){
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
      async function prepare() {
        try {
          await Font.loadAsync(Lobster_400Regular,Philosopher_700Bold);
          await new Promise(resolve => setTimeout(resolve, 2000));
        } catch (e) {
          console.warn(e);
        } finally {
          setAppIsReady(true);
        }
      }
  
      prepare();
    }, []);
  
    const onLayoutRootView = useCallback(async () => {
      if (appIsReady) {
         await SplashScreen.hideAsync();
      }
    }, [appIsReady]);
  
    if (!appIsReady) {
       return null;
    }

    
    return(
        <SafeArea>
            <Text styles={styles.title}>Home of love</Text>
        </SafeArea>
    )
}