import { StyleSheet ,View,Text, FlatList} from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";



function MealsOverViewScreen({route,navigation}){
//this route is taken from navigate function i.e navigation.navigate from the categoryscreen.js and here it is accessing the category Id.

        const catId = route.params.categoryId;

        const displayedMeals = MEALS.filter((mealItem)=>{
            return mealItem.categoryIds.indexOf(catId) >=0;
        })

        useLayoutEffect(()=>{
                const catTitle = CATEGORIES.find((category)=>
                category.id == catId).title;
                
                navigation.setOptions({
                    title: catTitle,
                })
        },[catId,navigation])
       

        function renderMealItem(itemdata){
            const item = itemdata.item;

            const mealItem ={
                duration: item.duration,
                affordability: item.affordability,
                title: item.title,
                complexity: item.complexity,
                imageUrl: item.imageUrl,
                id : item.id,
            }

            function pressHandler(){
                navigation.navigate("MealsDetailsScreen",{
                    mealId : item.id
                });
            }
            // return <MealItem title={itemdata.item.title} imageUrl={itemdata.item.imageUrl}
            // duration={mealItem.duration} affordability={mealItem.affordability} complexity={itemdata.item}/>
            return <MealItem {...mealItem} onPress={pressHandler} />
        }
    return (
        <View style={styles.container}>
            
            {/* this is one of the way to render the items but we can also
             do this by flatlist which helps us in scrolling the view in a better way. */}
            {/* {
                displayedMeals.map((meal)=>{
                    return(
                        <View>
                            <Text key={meal.id}>{meal.title}</Text>
                            </View>
                    )
                    
                })
            } */}
            <FlatList data={displayedMeals} keyExtractor={(item)=>item.id} renderItem={renderMealItem}/>
        </View>
    )
}

export default MealsOverViewScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
       
        padding:16,
    }
})