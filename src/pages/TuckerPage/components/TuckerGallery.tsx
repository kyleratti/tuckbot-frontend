import React from "react";
import ImageGallery from "react-image-gallery";
import { photos } from "./photos";

const TuckerGallery: React.FunctionComponent = () => (
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
    // @ts-ignore
    // This fixes a typings error with most of these attributes as the typings file is outdated
    additionalClass="tuckerGallery"
  />
);

export default TuckerGallery;
