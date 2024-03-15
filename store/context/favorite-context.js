
import { createContext, useState } from "react";


   export  const FavoriteContext = createContext({
    id:[],
    addFavorites : (id)=>{},
    remFavorites : (id)=>{    }
   });


   function FavoriteContextProvider({children}){
        const [favoriteMealId, setFavoriteMealId] = useState([]);

        function addFavorites(id){
                setFavoriteMealId((currentFav)=> [...currentFav, id]);

        }

        function remFavorites(id){
                setFavoriteMealId((currentFav)=> currentFav.filter((mealId) => mealId !== id));
        }

        const value = {
            ids : favoriteMealId,
            addFavorites : addFavorites,
            remFavorites : remFavorites
        }

    return (
        <FavoriteContext.Provider value={value}>{children}</FavoriteContext.Provider>
    )
   }
   export default FavoriteContextProvider;