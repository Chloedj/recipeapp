import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import RecipeDisplay from './RecipeDisplay.js';

export default function App() {
  let appID = '5bb4e5f1';
  let appKey = "97b712a9fdeff602778283dbe0ddc7cb";
  const [food_recipes, setfood_recipes] = useState([]); 
    const [search_recipe, setSearch_recipe] = useState(''); 
    const [search_query, setSearch_Query] = useState('chicken'); 


    const getRecipesFunction = useCallback(async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${search_query}&app_id=${appID}&app_key=${appKey}`
    );
    const data = await response.json();
    setfood_recipes(data.hits);
  }, [search_query, appID, appKey]);

useEffect(() => {
    getRecipesFunction();
  }, [getRecipesFunction]);
  
  
    const updateSearchFunction = (e) => { 
        setSearch_recipe(e.target.value); 
    }; 
  
    const getSearchFunction = (e) => { 
        e.preventDefault(); 
        setSearch_Query(search_recipe); 
        setSearch_recipe(''); 
    }; 
  
    return ( 
        <div className="App"> 
            <header className="Header"> 
                  <h1>Recipe Finder</h1>
                                           
            </header> 
            <div className="search-bar"> 
    <form onSubmit={getSearchFunction}>
        <input 
            type="text"
            name="search"
            value={search_recipe} 
            onChange={updateSearchFunction} 
            placeholder="Search for recipes..."
            className="search-input"
        /> 
        <button type="submit">Search Recipe</button> 
    </form> 
</div>
  
            <div className="recipe-display"> 
                         {food_recipes.map((recipe) => ( 
                        <RecipeDisplay key={recipe.recipe.label} recipe={recipe.recipe} /> 
                    ))} 
                
            </div> 
            <footer>
        This project was coded by{" "}
        <a href="https://github.com/Chloedj" target="_blank" rel="noreferrer"
          >Chloe Duggan-Jones</a
        >
        {" "}, is open souced on{" "}
        <a
          href="https://github.com/Chloedj/recipeapp"
          target="_blank" rel="noreferrer"
        >
          on GitHub</a
        >
        ,{" "}and{" "}
        <a
          href="https://beamish-beijinho-c87228.netlify.app/"
          target="_blank" rel="noreferrer"
          >hosted on Netlify</a
        >
      </footer>
        </div> 
    ); 
}; 
