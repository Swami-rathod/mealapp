import { FlatList } from "react-native";
import {CATEGORIES} from '../data/dummy-data'
import CategoryGridTitle from "../components/CategoryGridTile";



function CategoryScreens({navigation}){
    
    function renderCategoryItem(itemdata){

        function pressHandler(){
            navigation.navigate("MealsOverviewScreen", {
                categoryId : itemdata.item.id, //This categoryId is passed into the mealsoverviewscreen as a prop which is stored into routes.
            }); //In this function itemdata.item.id is taken from the flattlist which is from the categories.
        }
    
    
        return <CategoryGridTitle title={itemdata.item.title} color={itemdata.item.color} onPress={pressHandler}/>
    }
    return (
        <FlatList data={CATEGORIES} keyExtractor={(item)=> item.id} 
        renderItem={renderCategoryItem} numColumns={2}/>
    )
}

export default CategoryScreens;