// components/YouTubePlayer.tsx
import React from 'react';
import Box from '@chakra-ui/react';
import YouTube, { Options } from 'react-youtube';

const YouTubePlayer: React.FC = () => {
  const opts: Options = {
    height: '500',
    width: '100%',
    objectFit: 'contain',
    playerVars: {
      autoplay: 0, // set to 1 to autoplay video
      controls: 1,
      modestbranding: 0, // Removes YouTube branding
      rel: 0,
    },
  };

  const onReady = (event: { target: any }) => {
    // You can interact with the player via event.target if needed
    console.log('Video is ready');
  };

  return (
    <div className='video-wrapper'>
        <YouTube
          videoId="" // Replace with your YouTube video ID
          opts={opts}
          onReady={onReady}
          className='custom-player'
        />
    </div>
  );
};

export default YouTubePlayer;
