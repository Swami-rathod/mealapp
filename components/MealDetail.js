import { View,Text, FlatList } from "react-native";
import Meal from "../models/meal";
import Subtitle from "./Subtitle";

function MealDetail({ingredients, steps,textStyle}){

    function renderItem(itemdata){
        
        return <Text>{itemdata.item}</Text>;
    }
    return (
        <View>
            <View>
                <Subtitle subtitleStyle={textStyle}>Ingredients</Subtitle>
                {ingredients.map((item,index)=> ( <Text key={index}>{item }</Text>)
               
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
                <Subtitle subtitleStyle={textStyle}>Steps</Subtitle>
                <FlatList data={steps} keyExtractor={(item,index)=>index.toString()} renderItem={renderItem}/>
            </View>
        </View>
    )
}

export default MealDetail;

