import { View  } from 'react-native';
import { SafeArea } from '../utilities/AreaView';
import { Button } from 'react-native-paper';

export function SignUp(){
    return(
        <SafeArea>    
            <View>
                <Button mode='contained'onPress={() => navigation.navigate('About')}>Go to About Up</Button>
            </View>
        </SafeArea>
    )
}