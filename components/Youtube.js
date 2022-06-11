import React from "react";
import getYouTubeId from "get-youtube-id";

const YoutubeEmbed = ({ url }) => {
  const embedId = getYouTubeId(url);
  return (
    <div className="w-full">
      <iframe
        width="896"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};

export default YoutubeEmbed;
