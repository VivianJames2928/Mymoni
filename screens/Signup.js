import { SafeArea } from "../utilities/AreaView"
import { View } from "react-native"
import { Button } from "react-native-paper";

export function Signup ({navigation}){
    return (
      <SafeArea>
        <View>
            <Button mode="contained" onPress={() => navigation.navigate("About")} color="red">Go to About</Button>
        </View>
      </SafeArea>
    );
}