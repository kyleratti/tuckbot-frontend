import React from "react";
import { Photo } from "../photo";

type TuckImageProps = {
  photo: Photo;
};

const TuckImage: React.FC<TuckImageProps> = ({ photo, children }) => (
  <div className="tuckImage">
    <a href={photo.original}>
      <img src={photo.thumbnail} alt={photo.alt} />
    </a>
    {photo.caption && <div className="caption">{photo.caption}</div>}
    {children && <p>{children}</p>}
  </div>
);

export default TuckImage;
