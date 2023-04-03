import { LegacyRef, ReactNode } from "react";
import ReactPlayer from "react-player";

export interface WrapperProps {
    children?: ReactNode;
}

export interface VideoPlayerProps {
    url: string;
    playerRef: LegacyRef<ReactPlayer>;
}