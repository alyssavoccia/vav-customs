import Link from "next/link";
import styles from '@/styles/CategoryList.module.css';

const CategoryList = ({ categories, isActive }) => {
  return (
    <div className={styles.categoryListContainer}>
      <ul className={styles.categoryList}>
        <Link href='/blog'>
          <li className={!isActive ? styles.activeItem : ''}>All</li>
        </Link>
        {categories.map((category) => (
          <Link key={category} href={`/blog/category/${category.toLowerCase()}`}>
            <li className={isActive === category ? styles.activeItem : ''}>{category}</li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default CategoryList;