import styles from './Description.module.css';
import React from 'react';

export function RecipeAuthor() {

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

export class RecipeDescription extends React.Component {

    render() {

        return (

            <div>
                <div>
                    <h1>Recipe Title</h1>   
                    <p>Short Recipe Description</p>
                </div>
                <RecipeAuthor/>
            </div>

        );

    }

}