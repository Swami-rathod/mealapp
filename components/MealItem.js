import { useNavigation } from "@react-navigation/native";
import { StyleSheet,View,Text, Pressable ,Image} from "react-native";



function MealItem({title, imageUrl,duration, complexity, affordability,id}){

        const navigation = useNavigation();
        
        function PressHandler(){
            navigation.navigate("MealsDetailsScreen",{
                mealId : id
            })
        }

        return <View style={styles.mealItem}>
            <Pressable android_ripple={{color:'purple'}} style={({pressed})=> pressed ? styles.buttonPressed :null} onPress={PressHandler}>
                <View>
                    <Image style={styles.image} source={{uri: imageUrl}}/>
                      <Text style={styles.text}>{title}</Text>
                </View>
                <View style={styles.detail}>
                    <Text style={styles.detailItem}>{duration}</Text>
                    <Text style={styles.detailItem}>{complexity}</Text>
                    <Text style={styles.detailItem}>{affordability}</Text>
                
                </View>
            </Pressable>
           
        </View>
}

export default MealItem;

const styles= StyleSheet.create({
        mealItem:{
           backgroundColor:'#5B84B1FF',
           padding:16,
           borderRadius:5,
           borderWidth:2, 
        },
        image:{
            width:'100%',
            height:200,
            borderRadius:20,
        },
        text:{
            fontSize:18,
            fontWeight:'bold',
            textAlign:'center',
            paddingTop:5,
            marginBottom:2,
        },
        textView:{
            borderBottomColor:'grey', 
            borderBottomWidth:2,
            

        },
        detail:{
            flexDirection:"row",
            textAlign:'center',
            padding:8,
            justifyContent:'center'

        },
        detailItem:{
            marginHorizontal:5,
            fontSize:16,
            padding:8
        },
        buttonPressed:{
            opacity:0.5,
        }
})