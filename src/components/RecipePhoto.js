import styles from './Description.module.css';

export default function RecipePhoto() {

    return (
        <div className={styles.imageHeaderContainer}> 
            <img src="https://www.cookingclassy.com/wp-content/uploads/2019/12/pasta-fagioli-20.jpg" alt="recipe photo" className={styles.imageHeader} />
        </div>

    );

}