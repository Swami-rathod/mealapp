import { Pressable, View, StyleSheet } from "react-native";
import {Ionicons} from '@expo/vector-icons'
function IconButton({icon, onPress}){
    return(
        <View>
            <Pressable onPress={onPress} style={({pressed}) => pressed && styles.buttonIcon}>
                <Ionicons name={icon} size={24} color="white" style={styles.button}/>
            </Pressable>
        </View>
    )
}

export default IconButton;

const styles = StyleSheet.create({
    buttonIcon:{
        opacity: 0.7,
        color:'blue',
    },
    button:{
        color:"yellow",
    }

})