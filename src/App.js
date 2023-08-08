import {RecipeDescription} from './components/Description.js';
import {RecipeAuthor} from './components/Description.js';
import RecipeIngredients from './components/Ingredients.js';
import RecipePhoto from './components/RecipePhoto.js';
import styles from './components/Body.module.css';
import moreStyles from './components/Description.module.css';

function App() {
  return (
    <div>
    <div className={styles.topContainer}>
      <RecipeAuthor/>
      <RecipePhoto />
    </div>
    <div className={moreStyles.recipeInfo}>
        <RecipeDescription />
        <RecipeIngredients />
      </div>
    </div>
  );
}

export default App;
