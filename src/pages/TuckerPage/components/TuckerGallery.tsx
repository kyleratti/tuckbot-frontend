import React from "react";
import ImageGallery from "react-image-gallery";
import { photos } from "./photos";

const TuckerGallery: React.FC = () => (
  <ImageGallery
    items={photos}
    thumbnailPosition="top"
    lazyLoad={true}
    showFullscreenButton={false}
    showPlayButton={true}
    showIndex={true}
    autoPlay={true}
    startIndex={4}
    slideInterval={1000 * 5}
    additionalClass="tuckerGallery"
  />
);

export default TuckerGallery;
