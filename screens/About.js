import { View  } from 'react-native';
import { SafeArea } from '../utilities/AreaView';
import { Button } from 'react-native-paper';

export function About(){
    return(
        <SafeArea>
            <View>
                <Button mode='contained'>Go to Sign Up</Button>
            </View>
        </SafeArea>
    )
}