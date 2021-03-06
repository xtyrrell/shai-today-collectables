import Head from "next/head";
import { useState } from "react";
import * as dotenv from "dotenv"
import styles from "../styles/Home.module.scss";
import PhotoGridSection from "../components/photo-grid-section/photo-grid-section"


export default function Home({ photos: photosData }) {
  console.log(photosData)

  // Map photos to an object with more standard key names
  // so we're less tightly-coupled to airtable
  const photos = photosData.map(photoData => ({
    date: photoData.fields.Date,
    src: {
      small: photoData.fields.Photo[0].thumbnails.small.url, 
      large: photoData.fields.Photo[0].thumbnails.large.url,
      full: photoData.fields.Photo[0].url,
    },
    tags: photoData.fields.tags ?? [],
    ...photoData
  }))

  const mostRecentPhoto = photos[photos.length - 1];
  const [currentPhoto, setCurrentPhoto] = useState({
    index: photos.length - 1,
    date: mostRecentPhoto.fields["Date"],
    imageUrl: mostRecentPhoto.src.large,
  });

  const goToPreviousPhoto = () => {
    var previousIndex = currentPhoto.index - 1;
    var previousPhoto = photos[previousIndex];

    setCurrentPhoto({
      index: previousIndex,
      date: previousPhoto.fields["Date"],
      imageUrl: previousPhoto.src.large,
    });
  };

  const goToNextPhoto = () => {
    var nextIndex = currentPhoto.index + 1;
    var nextPhoto = photos[nextIndex];
    setCurrentPhoto({
      index: nextIndex,
      date: nextPhoto.fields["Date"],
      imageUrl: nextPhoto.src.large,
    });
  };

  const hasPrevious = () => {
    var previousIndex = currentPhoto.index - 1;
    if (photos[previousIndex]) return true;
    return false;
  };
  const hasNext = () => {
    var nextIndex = currentPhoto.index + 1;
    if (photos[nextIndex]) return true;
    return false;
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>shai today</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className={styles.todaysPhoto}>
          <h1 className={styles.title}>This is shai today.</h1>
          <h2>{currentPhoto.date}</h2>
          <img className={styles.currentPhoto} src={currentPhoto.imageUrl}></img>
          <div className={styles.carouselButtons}>
            <button onClick={goToPreviousPhoto} disabled={!hasPrevious()}>
              <h3>&larr; previous day</h3>
            </button>

            <button onClick={goToNextPhoto} disabled={!hasNext()}>
              <h3>next day &rarr;</h3>
            </button>
          </div>
        </section>

        <PhotoGridSection photos={photos} />
      </main>

      <footer className={styles.footer}>
        Made in Cape Town with ???? and ????.
      </footer>
    </div>
  );
}

export async function getServerSideProps() {
  dotenv.config();

  // Call an external API endpoint to get posts.
  // You can use any data fetching library

  var data = await fetch(
    `https://api.airtable.com/v0/appOhLn2wS6Xj9XNQ/Table%201?api_key=${process.env.AIRTABLE_API_KEY}&sort%5B0%5D%5Bfield%5D=Date`
  );

  var data = await data.json();
  var photos = data.records;
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      photos,
    },
  };
}
