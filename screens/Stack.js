import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Signup } from "./Signup";
import { Signin } from "./AddExpense";
import { About } from "./About";
import {HomeScreen} from "./HomeScreen";
import { AddIncome } from "./AddIncome";
import {AddExpense} from "./AddExpense"

const Stack = createNativeStackNavigator()

export function StackNavigator (){
    return (
        <Stack.Navigator initialRouteName="Signin" screenOptions={{headerShown:false}}>
            <Stack.Screen name="Signup" component={Signup} options={{headerShown:true}}/>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:true}}/>
            <Stack.Screen name="Signin" component={Signin}/>
            <Stack.Screen name="About" component={About}/>
            <Stack.Screen name="AddIncome" component={AddIncome}/>
            <Stack.Screen name="AddExpense" component={AddExpense}/>
        </Stack.Navigator>
    )
}