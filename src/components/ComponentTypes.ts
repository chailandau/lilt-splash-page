import { LegacyRef, ReactNode } from "react";
import ReactPlayer from "react-player";

export interface WrapperProps {
    children?: ReactNode;
    id?: string;
}

export interface VideoPlayerProps {
    url: string;
    playerRef: LegacyRef<ReactPlayer>;
}