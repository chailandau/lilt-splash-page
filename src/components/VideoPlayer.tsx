import Image from "next/image"
import { FC, useEffect, useState } from "react"
import ReactPlayer from "react-player"
import { VideoPlayerProps } from "./ComponentTypes"

const VideoPlayer: FC<VideoPlayerProps> = ({ url, playerRef }) => {
    return (
        <div className="video blue-glow-border">
            <ReactPlayer
                url={url}
                ref={playerRef}
                playsinline
                controls
                muted
                playing
                loop
            />
            <Image
                src='/images/hero-video-thumb.jpg'
                alt='Long Island Laser Tag Promo Video'
                fill
                priority
            />
        </div>
    )
}

export default VideoPlayer