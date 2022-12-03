import { Lobster_400Regular } from "@expo-google-fonts/lobster";
import { StyleSheet } from "react-native";
import { Theme } from "../themes/theme";


export const styles= StyleSheet.create({
    container:{
        flex: 1,
        paddingTop:Theme.sizes[2],
        paddingHorizontal:10,
        justifyContent: 'center',
        backgroundColor: '#3B185F'
    },
    mymonilogo:{
        alignItems: 'center'
    },
    logo:{
        width:30,
        height: 30,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 50,
        alignItems: "center",
        backgroundColor: 'white',
        
        
    },
    mymonibrandname:{
        fontFamily: "Lobster_400Regular",
        fontWeight: "bold",
        fontSize: 30,
        color: 'white',
    },
    introTips:{
        color: 'White',
    },
    introtips:{
        fontFamily: 'Philosopher_700Bold',
        marginTop: 30,
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
    },
    introImage:{
       
    },
    homeImage:{
        width: '100%',
        height: 300,
        borderRadius: 50,
        marginVertical: 15,
    },
    input:{
        color: 'White',
        backgroundColor: '#C147E9',
        borderWidth: 2,
        borderColor: "purple700",
        width: 320,
        height: 40,
        borderRadius: 30,
        textAlign: 'center',
        marginVertical: 5,
        
    },
    inputs:{
        color: 'white',
        backgroundColor: '#FF6D28',
        borderWidth: 2,
        borderColor: "purple700",
        width: 320,
        height: 40,
        borderRadius: 30,
        textAlign: 'center',
        marginVertical: 5,
        
    },

})