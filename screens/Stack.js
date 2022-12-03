import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignUp} from './SignUp';
import { SignIn} from './SignIn';
import { About } from './About';
import { Home} from './HomeScreen';
import { AddExpense} from './AddExpense';
import { AddIncome} from './AddIncome';
import { Intro } from './Intro';
import { Quizes} from './Quizes';


const Stack = createNativeStackNavigator()

export function StackNavigator(){
    return(
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
            <Stack.Screen name="Signup" component={SignUp} options={{headerShown:true}}/>
            <Stack.Screen name="Home" component={Home} options={{headerShown:true}}/>
            <Stack.Screen name="SignIn" component={SignIn}/>
            <Stack.Screen name="About" component={About}/>
            <Stack.Screen name="AddIncome" component={AddIncome}/>
            <Stack.Screen name="AddExpense" component={AddExpense}/>
            <Stack.Screen name="Intro" component={Intro}/>
            <Stack.Screen name="Quizes" component={Quizes}/>
        </Stack.Navigator>
    )
}