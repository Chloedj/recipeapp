import React from "react";
import './RecipeDisplay.css';

export default function RecipeDisplay({ recipe }) {
    console.log(recipe);
    return ( 
    <div className="recipe-card"> 
      <div className="recipe-info"> 
        <img 
          className="recipe-image"
          src={recipe.image} 
          alt={recipe.label} 
        /> 
       <div className="recipe-type"> 
  {recipe.dishType && recipe.dishType.length > 0 ? recipe.dishType[0] : 'N/A'} 
</div>
      </div> 
      <div className="recipe-text"> 
        <h1 className="recipe-name"> 
          {recipe.label} 
        </h1> 
        <div className="ingredients">
  <span><b>Ingredients:</b></span>
  <ul>
    {recipe.ingredientLines.map((ingredient, index) => (
      <li key={index}>{ingredient}</li>
    ))}
  </ul>
</div>
        <div className="recipe-link"> 
  <a 
    href={recipe.url} 
    target="_blank"
    rel="noopener noreferrer"
    className="recipe-button"
  > 
    View Recipe 
  </a> 
</div> 
      </div> 
    </div> 
  ); 
}