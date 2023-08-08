import RecipeDescription from './components/Description.js';
import RecipeIngredients from './components/Ingredients.js';
import RecipePhoto from './components/RecipePhoto.js';
import './App.css';

function App() {
  return (
    <div className="recipePhotoBlock">
      <RecipePhoto />
      <div className="recipePhotoBlock">
        <RecipeDescription />
        <RecipeIngredients />
      </div>
    </div>
  );
}

export default App;
