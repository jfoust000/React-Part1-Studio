import styles from './Ingredients.module.css';

export default function RecipeIngredients() {

    let ingredients = ["Ground beef", "Olive oil", "Yellow onion", "carrots", "celery"];

    return (

        <div className={styles.recipeContainer}>
        <h3>Recipe Ingredients</h3>
        <ul className = {styles.ingredientList}>
           <li id="groundBeef">{ingredients[0]}</li>
           <li id="olivOil">{ingredients[1]}</li>
           <li id="yellowOnion">{ingredients[2]}</li>
           <li id="carrots">{ingredients[3]}</li>
           <li id="celery">{ingredients[4]}</li>
        </ul>
     </div>

    );

}