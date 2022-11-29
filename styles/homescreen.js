import { StyleSheet } from "react-native";
import { Theme } from "../themes/theme"


export const styles=StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:8,
    },
    brandName:{
        fontFamily:"Lobster_400Regular",
        fontSize: Theme.fonts.fontSizePoint.h3,
        Color: Theme.colors.purple500
    },
    nav:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginBottom:Theme.sizes[2]
    },
    profilePix:{
        width: 48,
        height: 48,
        borderRadius:50,
    },
    homeContent:{
        flex:1,
    },
    tipBlock:{
        flex:2,
        backgroundColor:Theme.colors.purple700,
        padding:Theme.sizes[3],
        borderRadius:Theme.sizes[3]
    },
    fileTrans:{
        flex:1,
    },
    tipDetails:{
        flexDirection:"row",
        justifyContent:"space-evenly"
    },
    tipTextBlock:{
        width:160,
        backgroundColor:Theme.colors.purple500,
        padding:Theme.sizes[2],
        borderRadius:Theme.sizes[3]
    },
    tip:{
        fontFamily:Theme.fonts.fontFamily.reading,
        fontSize:Theme.fonts.fontSizePoint.h5,
        Color:"white"
    },
    tipImage:{
        width:160,
        height:"100%",
        borderRadius:Theme.sizes[3]
    },
    tipDate:{
        color:Theme.colors.brown300,
        fontSize:Theme.fonts.fontSizePoint.body,
        marginBottom:Theme.sizes[1]
    },
    previousTipsText:{
        color:Theme.colors.brown300,
        fontSize:Theme.fonts.fontSizePoint.body,
        marginTop:Theme.sizes[1],
        textAlign:"right"
    },
    fileTrans:{
        flex:1,
    },
    upcoming:{
        flex:1,
    },
    quizes:{
        flex:2,
    },
})