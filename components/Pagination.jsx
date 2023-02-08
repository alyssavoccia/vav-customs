import Link from "next/link";
import styles from '@/styles/Pagination.module.css';

const Pagination = ({ currentPage, numPages }) => {
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = `/blog/page/${currentPage - 1}`;
  const nextPage = `/blog/page/${currentPage + 1}`;

  return (
    <div className={styles.paginationContainer}>
      <ul className={styles.pagination}>
        {!isFirst && (
          <Link href={prevPage}>
            <li>Previous</li>
          </Link>
        )}

        {Array.from({length: numPages}, (_, i) => (
          <Link key={i} href={`/block/page/${i + 1}`}>
            <li>{i + 1}</li>
          </Link>
        ))}

        {!isLast && (
          <Link href={nextPage}>
            <li>Next</li>
          </Link>
        )}
      </ul>
    </div>
  )
}

export default Pagination;