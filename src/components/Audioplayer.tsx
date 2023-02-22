import * as React from 'react';

import { useEffect } from 'react';
import { Howl, Howler } from 'howler';

interface AudioProps {
    audio: string;
}

export default function HowlAudio({audio}: AudioProps) {
    useEffect(() => {
        const aud: Howl = new Howl({
            src: [audio],
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