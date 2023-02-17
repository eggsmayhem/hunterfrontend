import * as React from 'react';
import styles from '@/styles/Home.module.css'
// import Button from '@mui/material/Button';

// export default function BasicButtons({title, handleAction}) {
//     return (
//         <Button variant="contained" onClick={handleAction}>{title}</Button>
//     );
// }

interface Props {
    handleButtonClick: () => void;
    type: string;
}
export default function BasicButtons({handleButtonClick, type}: Props) {
    return (
        <div onClick={handleButtonClick} className={styles.button}>{type}</div>
    );
}