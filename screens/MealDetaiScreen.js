import { View,Text ,Image, StyleSheet, FlatList, Button} from "react-native";
import { MEALS} from "../data/dummy-data";
import MealDetail from "../components/MealDetail";
import Subtitle  from "../components/Subtitle";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { FavoriteContext } from "../store/context/favorite-context";
function MealDetailScreen({route, navigation}){

    const id = route.params.mealId;
    
    const selectedMeal = MEALS.find((item)=> item.id === id);
   
    function renderItem(itemdata){
  
        return <Text>{itemdata.item}</Text>;
    }
    function changeFavoriteStatus(){
        if(mealIsFavorite){
            fvtContext.remFavorites(id);
        }
        else{
            fvtContext.addFavorites(id);
        }
    }
    const fvtContext = useContext(FavoriteContext);

    const mealIsFavorite = fvtContext.ids.includes(id);


    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight:()=>{
                return <IconButton icon={mealIsFavorite ? "star" : "star-outline"} onPress={changeFavoriteStatus} />
            }
        })
    })


    return (
        <View>
         <Text style={styles.text}>{selectedMeal.title}</Text>
         <Image style={styles.image} source={{uri : selectedMeal.imageUrl}}/>
         {/* <MealDetail ingredients={[selectedMeal.ingredients]} steps={[selectedMeal.steps]} textStyle = {styles.titleStyle}/> */}
         <View>
                <Subtitle titlestyle={styles.titleStyle}>Ingredients</Subtitle>
                {selectedMeal.ingredients.map((item,index)=> ( <Text key={index}>{item }</Text>)
               
                )}
            </View>
            {/* <View>
                <Subtitle subtitleStyle={textStyle}>Steps</Subtitle>
                {steps.map((item,index)=>{
                    return <>
                            <Text key={index}>{item}</Text>
                    </>
                })}
            </View> */}
            <View>
              
                <Subtitle titlestyle={styles.titleStyle}>Steps</Subtitle>
                <FlatList data={selectedMeal.steps} keyExtractor={(item,index)=>index.toString()} renderItem={renderItem}/>
            </View>
        </View>
    )
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    image:{
        width:'88%',
        height:200,
        borderRadius:20,
        marginHorizontal:22,
    },
    text:{
        fontSize:18,
        fontWeight:'bold',
        textAlign:'center',
        paddingTop:5,
        marginBottom:2,
    },
    titleStyle:{
        fontSize:18,
        textAlign:'center',
        color:'white',
        fontWeight:'bold',
        
        
    }
})