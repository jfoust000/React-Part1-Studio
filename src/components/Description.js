import styles from './Description.module.css';
import React from 'react';

function RecipeAuthor() {

    let authorLink = "https://www.cookingclassy.com/olive-garden-pasta-e-fagioli-soup-copycat-recipe/";
    let authorPhoto = "https://www.cookingclassy.com/wp-content/uploads/2019/08/jaclyn-bell@2x.jpg"
    let authorName = "jaclyn"
    let authorLinkText = "Pasta e Fagioli Soup {Better than Olive Garden's}";

    return (

        <div className={styles.recipeAuthorBlock}>
            <img src={authorPhoto} alt="Jaclyn" className={styles.imageUpdates}/>
                <div>
                    <h3>{authorName}</h3> 
                    <a href={authorLink}>{authorLinkText}</a>
                </div>
        </div>

    );

}

class RecipeDescription extends React.Component {

    render() {

        let recipeTitle = "Pasta e Fagioli Soup {Better than Olive Garden’s}";
        let recipeShortDescription = "The BEST Pasta e Fagioli Soup! And yes, it's even better than Olive Garden's!\n\nThis Italian style soup is loaded with hearty ground beef, fresh vegetables, creamy beans, tender pasta and delicious herbs all in a rich and savory broth.";

        return (

            <div>
                <div>
                    <h1>{recipeTitle}</h1>   
                    <p>{recipeShortDescription}</p>
                </div>
                <RecipeAuthor/>
            </div>

        );

    }

}

export default RecipeDescription;