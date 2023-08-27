import React from 'react';

const VideoBackground = () => {
  return (
    <div className="absolute inset-0 z-0">
      <video
        className="h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="bgVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
