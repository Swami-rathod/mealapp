import { Pressable ,Platform,StyleSheet} from "react-native";
import {View, Text} from 'react-native';


function CategoryGridTitle({title, color, onPress}){
    return (
  
            <View style={styles.gridItem}>
            <Pressable  android_ripple={{color:'#ccc'}} 
             style={({pressed}) => [styles.button, pressed ? styles.buttonPressed :null]} onPress={onPress} >
            <View style={[styles.innerContainer, {backgroundColor:color}]}>
            <Text style={styles.title}>{title}</Text>
            </View>
           </Pressable>
            </View>   
            

    )
}

export default CategoryGridTitle;

const styles= StyleSheet.create({
 gridItem:{
    marginTop:24,
    flex:1,
   marginHorizontal:10,
    height:150,
    elevation:4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    backgroundColor:'pink',
    borderRadius:8,
    backgroundColor:'white',
    overflow:Platform.OS==='android' ? 'hidden':'visible',
 },
 button:{
    flex:1,
 },
 buttonPressed:{
    opacity:0.5,
    backgroundColor:'silver'
 },
 innerContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    padding:16,
    borderRadius:8,

 },
 title:{
    fontSize:18,
    fontWeight:'bold'
 }
})