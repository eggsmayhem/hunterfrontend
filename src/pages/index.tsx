import Head from 'next/head'
import Image from 'next/image'
import  Audioplayer from '../components/Audioplayer'
import Button from '../components/Button'
import Inputform from '../components/Inputform'
import Newspaper from '../components/Newspaper'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

import { useState } from 'react';

import Propstest from '../components/Propstest'

const inter = Inter({ subsets: ['latin'] })

interface Data {
  message: string;
  s3: string;
  newsArray?: string[];
  hunterText: string;
}

export default function Home() {

  const [text, setText] = useState<string>('');
  const [s3Url, setS3Url] = useState<string>('');
  //eventuall get rid of imageUrl
  const [imageUrl, setImageUrl] = useState('');
  const [article, setArticle] = useState<string[] | undefined>([]);
  const [newsDate, setNewsDate] = useState("");

  const [hunterText, setHunterText] = useState<string>('');

  //does below function need to be async
  const handleChatButtonClick = async () => {
    try {
      const res = await fetch('http://localhost:8000/exchanges/speaktohunter', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({text}),
      });
      const data: Data = await res.json();
      const s3: string = data.s3;
      const hunterTextResponse: string = data.hunterText;
      const article: string[] | undefined = data.newsArray;
      setHunterText(hunterTextResponse);
      setS3Url(s3); 
      setArticle(article);
      console.log(setS3Url);
      console.log(s3Url);
    }
    catch(err) {
      console.log(err);
    }
   
  }
  const handleNewsButtonClick = async () => {
    const res = await fetch('http://localhost:8000/exchanges/getthenews');
    const data: Data = await res.json();
    const s3: string = data.s3;
    const hunterTextResponse: string = data.hunterText;
    setHunterText(hunterTextResponse);
    setS3Url(s3); 
    console.log(setS3Url);
    console.log(s3Url);
  }

  return (
    <>
      <Head>
        <title>Hunterbot</title>
        <meta name="description" content="a humble news-reading bot" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
         
          <Image
            className={styles.logo}
            src="/hunterbotdallenobg2.png"
            alt="A stylized cartoon of Hunter S Thompson"
            width={180}
            height={37}
            priority
          />
          { s3Url && <Audioplayer key={s3Url} sound={s3Url}/>}
          {/* <div>fake audio player + {s3Url? s3Url : ""}</div> */}
          {/* We might want to change to using ref or adding a debouncer here... */}
          {/* Might also need to prevent default */}
          {/* <div>{received ? received : 'nothing yet'}</div> */}
          <Propstest url={s3Url}/>
          <input type="text" value={text} onChange={event => setText(event.target.value)}/>
          <Button handleButtonClick={handleChatButtonClick} type={'Chat'}/>
          <Button handleButtonClick={handleNewsButtonClick}type={'News'}/>
          <Newspaper newsArray={article}/>
      
      </main>
    </>
  )
}
