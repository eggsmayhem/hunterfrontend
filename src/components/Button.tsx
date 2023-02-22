import * as React from 'react';
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react';
import { ColorRing } from 'react-loader-spinner';

interface Props {
    handleButtonClick: () => void;
    type: string;
}
export default function BasicButtons({handleButtonClick, type}: Props) {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
       const fetchLoading = async () => {
           try {
               const res = await fetch('https://hunterbot-api.onrender.com/exchanges/');
               setIsLoading(false);
           } catch (error) {
               console.log(error);
           }
       }
         fetchLoading(); 
      }, [isLoading]);
    return (
        <>
        {isLoading ? <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          /> : <div onClick={handleButtonClick} className={styles.button}>{type}</div>}
        </>
    );
}