import { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";

const Recipies = () => {
  const { data } = useContext(recipecontext);

  const renderrecipes = data.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ));

  return (
    <div className="flex flex-wrap">
      {data.length > 0 ? renderrecipes : "No Recipes Found!"}
    </div>
  );
};

export default Recipies;
