// components/YouTubePlayer.tsx
import React from 'react';
import Box from '@chakra-ui/react';
import YouTube from 'react-youtube';

const YouTubePlayer: React.FC = () => {
  const opts: Options = {
   type YouTubeOptions = {
  height?: string;
  width?: string;
  playerVars?: { autoplay?: 0 | 1; [key: string]: any };
};

const opts: YouTubeOptions = {
  height: '390',
  width: '640',
  playerVars: { autoplay: 1 },
};
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
