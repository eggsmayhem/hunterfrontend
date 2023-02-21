import * as React from 'react';

import { useEffect } from 'react';
import { Howl, Howler } from 'howler';

// interface AudioProps {
//     sound: string;
//     audioReference: React.MutableRefObject<HTMLAudioElement | null>;
// }

interface AudioProps {
    audio: string;
}

// export default function Audioplayer({sound, audioReference}: AudioProps) {

//     useEffect(() => {
//         // audioReference.current?.load();
//         audioReference.current?.play();
//     }, [sound, audioReference])
    
//     return (
//         <audio
//             ref={audioReference}
//             // autoPlay={true}
//             controls={false} >
//             <source type="audio/mp3" src={sound} style={{visibility: "hidden"}}/>
//         </audio>
//     )
// }

// export default function Audioplayer() {
//     return (
//         <div>Audioplayer</div>
//     )
// }

export default function HowlAudio({audio}: AudioProps) {
    useEffect(() => {
        const aud: Howl = new Howl({
            src: [audio],
            // preload: false,
            html5: true,
        });
        aud.once('unlock', () => {
            aud.load();
            aud.play();
        });
        aud.load();
            aud.play();
    }, [audio]);
    return (
        <div>buy the ticket take the ride</div>
    )
}