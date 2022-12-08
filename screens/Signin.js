// Assignment
import { View  } from 'react-native';
import { SafeArea } from '../utilities/AreaView';
import { Button } from 'react-native-paper';
export function SignIn({navigation}){
    return(
        <SafeArea>
            <View>
                <Button mode='contained' onPress={() => navigation.navigate('Signup')}>Go to Sign Up</Button>
            </View>
        </SafeArea>
    )
}