import dynamic from 'next/dynamic';
import { useRef } from 'react';
import ReactPlayer, { ReactPlayerProps } from 'react-player';
const VideoPlayer = dynamic(() => import("../components/VideoPlayer"), { ssr: false });

const Hero = () => {

    const playerRef = useRef<ReactPlayer>(null);

    return (
        <section id="hero">
            <ul>
                <li>Up to 24 players</li>
                <li>Personalized laser taggers</li>
                <li>Custom games</li>
                <li>Wireless gear</li>
                <li>Unique mobile battle arena</li>
                <li>And much more</li>
            </ul>
            <VideoPlayer
                url='https://vimeo.com/814070809'
                playerRef={playerRef}
            />

        </section>

    )
}

export default Hero