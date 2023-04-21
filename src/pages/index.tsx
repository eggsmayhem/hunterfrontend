import Head from 'next/head'
import Image from 'next/image'
import Audioplayer from '../components/Audioplayer'
import Button from '../components/Button'
import Newspaper from '../components/Newspaper'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

interface Data  {
  message: string;
  s3: string;
  hunterText: string;
}

interface NewsData extends Data {
  newsArray: string[];
}

export default function Home() {
  
  const [text, setText] = useState<string>('');
  const [s3Url, setS3Url] = useState<string>('');
  const [article, setArticle] = useState<string[]>([]);
  const [hunterText, setHunterText] = useState<string>('');

  const handleChatButtonClick = async () => {
    try {
      const res = await fetch('https://hunterbot-api.onrender.com/exchanges/speaktohunter', {
        // const res = await fetch('https//localhost:8000/exchanges/speaktohunter', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({text}),
      });
      const data: Data = await res.json();
      const s3: string = data.s3;
      const hunterTextResponse: string = data.hunterText;
      setHunterText(hunterTextResponse);
      setS3Url(s3); 
      setArticle([])
 
    }
    catch(err) {
      console.log(err);
    }
   
  }
  const handleNewsButtonClick = async () => {
    const res = await fetch('https://hunterbot-api.onrender.com/exchanges/getthenews');
    // const res = await fetch('http://localhost:8000/exchanges/getthenews');
    const data: NewsData = await res.json();
    const s3: string = data.s3;
    const hunterTextResponse: string = data.hunterText;
    const news: string[]= data.newsArray;
    setArticle(news);
    setHunterText(hunterTextResponse);
    setS3Url(s3); 

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
  
          <a href="https://ko-fi.com/eggsmayhem" className={styles.kofiButton}>Help me keep the lights on</a>

        <h1>Hunterbot</h1>
          <Image
            className={styles.logo}
            src="/hunterbotdallenobg2.png"
            alt="A stylized cartoon of Hunter S Thompson"
            width={180}
            height={37}
            priority
          />
         <div className={styles.hunterText}>{hunterText}</div>
         <label htmlFor="text-submit">Enter text</label>
          <textarea value={text} rows={4} placeholder="Type a message and click 'Chat' or click 'News' to hear Hunter's take on a headline (may take a minute to load backend before first question)..."className={styles.textBox} onChange={event => setText(event.target.value)} id="text-submit" tabIndex={0}/>
          <div className={styles.buttonContainer}>
            <Button handleButtonClick={handleChatButtonClick} label={'Chat'}/>
            <Button handleButtonClick={handleNewsButtonClick} label={'News'}/>
          </div>
          <Audioplayer audio={s3Url}/>
          <Newspaper newsArray={article}/>
         
      </main>
    </>
  )
}
