import * as React from 'react';


//remove

interface AudioProps {
    sound: string;
}


export default function Audioplayer({sound}: AudioProps) {
    return (
        <audio
        // ref="audio_tag"
            autoPlay={true}
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