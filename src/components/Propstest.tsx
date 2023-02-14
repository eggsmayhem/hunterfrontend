import * as React from 'react';
// import Button from '@mui/material/Button';

// export default function BasicButtons({title, handleAction}) {
//     return (
//         <Button variant="contained" onClick={handleAction}>{title}</Button>
//     );
// }

interface Props2 {
    url: string;
}
export default function Propstest({url}: Props2) {
    return (
        <div>{url? url : ''}</div>
    );
}