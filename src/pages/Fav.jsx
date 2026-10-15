import { useContext } from "react";
import RecipeCard from "../components/RecipeCard";
import { recipecontext } from "../context/RecipeContext";

const Fav = () => {
  const favourite = JSON.parse(localStorage.getItem("fav") || []);

  const renderrecipes = favourite.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ));

  return (
    <div className="flex flex-wrap">
      {favourite.length > 0 ? renderrecipes : "No Favourite Found!"}
    </div>
  );
};

export default Fav;
