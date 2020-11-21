import React from "react";

type VideoDownloadProps = {
  mirrorUrl: string;
};

export const VideoDownload: React.FC<VideoDownloadProps> = ({ mirrorUrl }) => (
  <div id="download">
    <a href={`${mirrorUrl}?dl=1`}>download</a>
  </div>
);
