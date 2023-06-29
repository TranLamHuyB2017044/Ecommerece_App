import styles from './Categories.module.scss';
import { categories } from '../../data';
function Categories() {
    return ( 
        <div className={styles.category_container}>
            {categories.map(category =>(
                <div key={category.id} className={styles.categories_content}>
                    <div className={styles.category_image}>
                        <img src={category.img} alt={category.img}/>
                    </div>
                    <div className={styles.category_info}>
                        <p className={styles.title}>{category.title}</p>
                        <button>Shop Now</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Categories;
