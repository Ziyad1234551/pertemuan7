import styles from "./Movie.module.css"

function Movie(props) {
    const {movie} = props;
    return(
        <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src={movie.poster}
              alt={movie.title}
            />
            <h3 className={styles.movie__title}>Movie Title</h3>
            <p className={styles.movie__date}>Date Title</p>
        </div>
    )
    
}
export default Movie;