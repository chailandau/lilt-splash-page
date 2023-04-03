import Image from "next/image"
import { FC, useEffect, useState } from "react"
import ReactPlayer from "react-player"
import { VideoPlayerProps } from "./ComponentTypes"

const VideoPlayer: FC<VideoPlayerProps> = ({ url, playerRef }) => {


    const [ready, setReady] = useState(false)

    useEffect(() => {
        console.log(ready)
    }, [ready])


    return (
        <div className="video">


            <ReactPlayer
                url={url}
                ref={playerRef}
                onReady={() => setReady(true)}
                playsinline
                controls
                muted
                playing
            />

            <Image
                src='/images/HeroVideoThumbnail.jpg'
                alt='Long Island Laser Tag Promo Video'
                fill
                priority
            />
        </div>
    )
}

export default VideoPlayer