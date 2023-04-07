import { nanoid } from "nanoid";
import { useState } from "react";
import Alert from "../Alert/Alert";
import styles from "./AddMovieForm.module.css";

// Menangkap props
function AddMovieForm(props) {
  /**
   * Ini hanya snippet(potongan) code.
   * Kode yang lainnya tetap sama.
   */

  // Destructing props: state movies
  const { movies, setMovies } = props;

  // Membuat state title dan date
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [picture,setPicture]=useState("");
  const [option,setOption]=useState("");

  // Membuat state: isTitleError, isDateError
  const [isTitleError, setIsTitleError] = useState(false);
  const [isDateError, setIsDateError] = useState(false);
  const [isPictureError,setIsPictureError]=useState(false);
  const [isOptionError,setIsOptionError]=useState(false);

  /**
   * Membuat fungsi handleTitle
   * Dijalankan ketika nilai input berubah
   */
  function handleTitle(e) {
    /**
     * Jalankan fungsi setTitile.
     * Set title nilai baru: input saat ini.
     */
    setTitle(e.target.value);
  }
  function handlePicture(e){
    setPicture(e.target.value);
  }
  function handleOption(e){
    setOption(e.target.value);
  }

  /**
   * Membuat fungsi handleDate
   * Dijalankan ketika nilai input berubah
   */
  function handleDate(e) {
    /**
     * Jalankan fungsi setDate.
     * Set date nilai baru: input saat ini.
     */
    setDate(e.target.value);
  }

  function handleSubmit(e) {
    /**
     * Mencegah perilaku default form.
     * Mencegah form direfresh ketika disubmit.
     */
    e.preventDefault();

    // Jika title kosong, set isTitleError true
    if (title === "") {
      setIsTitleError(true);
    }
    // Jika title kosong, set isTitleError true
    else if (date === "") {
      setIsDateError(true);
    }
      else if (option === "") {
      setIsOptionError(true);
    }
  
  else if (picture === "") {
  setIsPictureError(true);
}
    // Jika tidak, maka push movie dan set error false
    else {
      const movie = {
        id: nanoid(),
        title: title,
        year: date,
        type: option,
        poster: picture,
      };

      // SOLVED: HOW TO ADD MOVIE TO MOVIES :)
      setMovies([...movies, movie]);

      setIsTitleError(false);
      setIsDateError(false);
      setIsPictureError(false);
      setIsOptionError(false);
    }
  }

  return (
    <div className={styles.container}>
      <section className={styles.form}>
        <div className={styles.form__left}>
          <img
            className={styles.form__image}
            src="https://picsum.photos/536/354"
            alt=""
          />
        </div>
        <div className={styles.form__right}>
          <h2 className={styles.form__title}>Add Movie Form</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.form__group}>
              <label htmlFor="title" className={styles.form__label}>
                Title
              </label>
              <input
                id="title"
                className={styles.form__input}
                type="text"
                name="title"
                // Memberikan value input: title
                value={title}
                // Memberikan event onChange
                onChange={handleTitle}
              />
              {/*
               * Menambahkan infline if: operator &&
               * Jika isTitleError true maka render error
               */}
              {isTitleError && <Alert>Title Wajib Diisi</Alert>}
            </div>
            <div className={styles.form__group}>
              <label htmlFor="date" className={styles.form__label}>
                Date
              </label>
              <input
                id="date"
                className={styles.form__input}
                type="text"
                name="date"
                // Memberikan value input: date
                value={date}
                // Memberikan event onChange
                onChange={handleDate}
              />
              {isDateError && <Alert>Date Wajib Diisi</Alert>}
               <label htmlFor="picture" className={styles.form__label}>
                picture
              </label>
              <input
                id="picture"
                className={styles.form__input}
                type="text"
                name="picture"
                // Memberikan value input: date
                value={picture}
                // Memberikan event onChange
                onChange={handlePicture}
              />
              {/*
               * Menambahkan infline if: operator &&
               * Jika isDateError true maka render error
               */}
              {isPictureError && <Alert>Date Wajib Diisi</Alert>}
              <label htmlFor="option" className={styles.form__label}>
                option
              </label>
              <select 
              id="genre"
              name="genre"
              onChange={handleOption}
              className={styles.form__input}
              value={option}>
            <option value="">pilih salah satu</option>


            <option value="horror">horror</option>
            <option value="fantasy">fantasy</option>
            <option value="comedy">Comedy</option>
            <option value="Scy-fy">scy-fy</option>
                
            </select>
            {isOptionError && <Alert>Date Wajib Diisi</Alert>}

            </div>
            <div>
              <button className={styles.form__button}>Add Movie</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default AddMovieForm;