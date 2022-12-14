import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { SignIn } from "./Signin";
import { SignUp } from "./Signup";
import { About } from "./About";
import { Home } from "./HomeScreen";
import { AddExpense } from "./AddExpense";
import { AddIncome } from "./AddIncome";
import { Quizes } from "./Quizes";
import { Favourites } from "./Favourites";

const Stack = createNativeStackNavigator();

export function StackNavigator (){
    return (
        <Stack.Navigator initialRouteName= 'Favs'>
            <Stack.Screen name="Home" component={Home}/> 
            <Stack.Screen name="Sign In" component={SignIn}/>
            <Stack.Screen name="Sign Up" component={SignUp}/>
            <Stack.Screen name="About" component={About}/>
            <Stack.Screen name="Add Expense" component={AddExpense}/>
            <Stack.Screen name="Add Income" component={AddIncome}/>
            <Stack.Screen name="Quizes" component={Quizes}/>
            <Stack.Screen name="Favs" component={Favourites}/>
        </Stack.Navigator>
    )
}
// import {createNativeStackNavigator} from "@react-navigation/native-stack";
// import { SignIn } from "./SignIn";
// import { SignUp } from "./Signup";
// import { About } from "./About";
// import { Home } from "./HomeScreen";
// import { AddExpense } from "./AddExpense";
// import { AddIncome } from "./AddIncome";
// import { Quizes } from "./Quizes";
// import { Favourites } from "./Favourites";

// const Stack = createNativeStackNavigator();

// export function StackNavigator (){
//     return (
//         <Stack.Navigator initialRouteName= 'Home'  options={{headerShown:false}}>
//             <Stack.Screen name="Home" component={Home}/> 
//             <Stack.Screen name="Sign In" component={SignIn}/>
//             <Stack.Screen name="Sign Up" component={SignUp}/>
//             <Stack.Screen name="About" component={About}/>
//             <Stack.Screen name="Add Expense" component={AddExpense}/>
//             <Stack.Screen name="Add Income" component={AddIncome} options={{headerShown:true}}/>
//             <Stack.Screen name="Quizes" component={Quizes}/>
//             <Stack.Screen name="Favs" component={Favourites}/>
//         </Stack.Navigator>
//     )
// }