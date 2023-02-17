import * as React from 'react';

import { useEffect } from 'react';

interface AudioProps {
    sound: string;
    audioReference: React.MutableRefObject<HTMLAudioElement | null>;
}


export default function Audioplayer({sound, audioReference}: AudioProps) {

    useEffect(() => {
        // audioReference.current?.load();
        audioReference.current?.play();
    }, [sound, audioReference])
    
    return (
        <audio
            ref={audioReference}
            // autoPlay={true}
            controls={false} >
            <source type="audio/mp3" src={sound} style={{visibility: "hidden"}}/>
        </audio>
    )
}

// export default function Audioplayer() {
//     return (
//         <div>Audioplayer</div>
//     )
// }