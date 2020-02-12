import React from 'react';
import getVideoId from 'get-video-id';
import Vimeo from '@u-wave/react-vimeo';
import Youtube from 'react-youtube';

const Preview = ({value}) => {
  const {url} = value;
  if (url) {
    const video = getVideoId(url || null);

    if (video.service === 'youtube') {
      return <Youtube videoId={video.id} />;
    }

    if (video.service === 'vimeo') {
      return <Vimeo video={video.id} />;
    }
  }

  return <div>Video preview not available for this URL</div>;
};

export default {
  name: 'video',
  type: 'object',
  title: 'Video Embed',
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'Video URL'
    }
  ],
  preview: {
    select: {
      url: 'url'
    },
    component: Preview
  }
};
