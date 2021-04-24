import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import * as dotenv from "dotenv"

export default function Home({ photos }) {
  const mostRecentPhoto = photos[photos.length - 1];
  const [currentPhoto, setCurrentPhoto] = useState({
    index: photos.length - 1,
    date: mostRecentPhoto.fields["Date"],
    imageUrl: mostRecentPhoto.fields["Photo"][0]["url"],
  });

  const goToPreviousPhoto = () => {
    var previousIndex = currentPhoto.index - 1;
    var previousPhoto = photos[previousIndex];

    setCurrentPhoto({
      index: previousIndex,
      date: previousPhoto.fields["Date"],
      imageUrl: previousPhoto.fields["Photo"][0]["url"],
    });
  };

  const goToNextPhoto = () => {
    var nextIndex = currentPhoto.index + 1;
    var nextPhoto = photos[nextIndex];
    setCurrentPhoto({
      index: nextIndex,
      date: nextPhoto.fields["Date"],
      imageUrl: nextPhoto.fields["Photo"][0]["url"],
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

      <main className={styles.main}>
        <h1 className={styles.title}>This is shai today.</h1>
        <h2>{currentPhoto.date} </h2>
        <img src={currentPhoto.imageUrl}></img>
        <div className="navigation">
          <button onClick={goToPreviousPhoto} disabled={!hasPrevious()}>
            <h3> &larr; previous day</h3>
          </button>

          <button onClick={goToNextPhoto} disabled={!hasNext()}>
            <h3>next day &rarr;</h3>
          </button>
        </div>
      </main>

      <footer className={styles.footer}>
        Made in Cape Town with 🦀 and 🍞.
      </footer>
      <style jsx>{`
        img {
          margin-top: 20px;
          height: 400px;
        }

        button {
          background-color: transparent;
          border: none;
        }

        button:hover:not(:disabled) {
          cursor: pointer;
          color: #0070f3;
        }

        button:focus {
          outline: none;
        }

        .navigation {
          display: flex;
          justify-content: space-between;
          width: 100%;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps() {
  dotenv.config();

  // Call an external API endpoint to get posts.
  // You can use any data fetching library

  var data = await fetch(
    `https://api.airtable.com/v0/appOhLn2wS6Xj9XNQ/Table%201?api_key=${process.env.AIRTABLE_API_KEY}`
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
