"use client";

import { Play } from "lucide-react";
import { useState } from "react";
import ReactPlayer from "react-player";

interface Props {
  url: string;
}

export default function VideoPlayer({ url }: Props) {
  const [play, setPlay] = useState(false);

  return (
    <div className="relative w-full max-w-3xl aspect-video rounded-2xl overflow-hidden shadow-lg mx-auto">
      {/* Player */}
      <ReactPlayer
        src={url}
        playing={play}
        controls
        width="100%"
        height="100%"
        className="rounded-2xl"
      />

      {/* Overlay tombol play custom */}
      {!play && (
        <button
          onClick={() => setPlay(true)}
          className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/60 transition"
        >
          <Play size={64} className="text-white" />
        </button>
      )}
    </div>
  );
}
