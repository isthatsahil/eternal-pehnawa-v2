"use client";
import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";
import "./video-player.css";
const VideoPlayer = () => {
  return (
    <CldVideoPlayer
      width="1920"
      height="1080"
      src="eternal_pehnawa/VIDEO-2022-06-26-18-41-54_lwtlcv"
      className="video"
      logo={{
        imageUrl:
          "https://res.cloudinary.com/cryptomonthly/image/upload/v1669137714/eternal_pehnawa/logo_meoecm.png",
        onClickUrl: "https://eternalpehnawa.com",
      }}
    />
  );
};

export default VideoPlayer;
