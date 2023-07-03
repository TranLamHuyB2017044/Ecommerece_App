import styles from './Categories.module.scss';
import { categories } from '../../data';
import { Link } from 'react-router-dom';
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
                        <button><Link to='/products' className={styles.Link}>Shop Now</Link></button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Categories;
