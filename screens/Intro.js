import { View, Text, Image, TextInput  } from 'react-native';
import { SafeArea } from '../utilities/AreaView';
import { Button } from 'react-native-paper';
import { styles } from '../styles/intro';
import { Entypo, Feather,FontAwesome5 } from '@expo/vector-icons';


export function Intro(){
    let word = "Sign In"
    let words = "Get Started"
    return(
        <SafeArea> 
            <View style={styles.container}>
                <View style={styles.mymonilogo}>
                    <Entypo name="medium-with-circle" size={24} color="black" style={styles.logo} />
                    <Text style={styles.mymonibrandname}>mymoni</Text>
                </View>

                <View style={styles.introTips}>
                    <Text style={styles.introtips}>Secure your Future</Text>
                </View>

                <View style={styles.introImage}>
                    <Image source={require('../assets/Intro1pics.jpg')} style={styles.homeImage}/>
                </View>

                <View style={styles.signIn}>
                    <Button style={styles.input} mode='contained'onPress={() => navigation.navigate('SignIn')}> Sign Up</Button>
                    <Button style={styles.inputs} mode='contained'onPress={() => navigation.navigate('SignIn')}> Sign In</Button>
                    {/* <TextInput placeholder={word} style={styles.input}/>
                    <TextInput placeholder={words} style={styles.inputs}/> */}
                </View>

                <View style={styles.flex}>
                    
                </View>
            </View>   

            <View>
                
            </View>
        </SafeArea>
    )
}