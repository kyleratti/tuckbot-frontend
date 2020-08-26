import React from "react";
import PageContainer from "../../components/PageContainer";
import { setTitle } from "../../services/title/hooks";
import TuckImage from "./components/TuckImage";
import { Photo } from "./photo";

const TUCKER_BIRTHDAY = 1456790400;
const TUCKER_BIRTHDAY_DIFF = Math.floor(Date.now() / 1000) - TUCKER_BIRTHDAY;
const TUCKER_AGE = Math.floor(TUCKER_BIRTHDAY_DIFF / (60 * 60 * 24 * 365));

type PhotoObject = {
  img: string;
  alt: string;
  caption?: string;
};

const makePhotoObject = (opts: PhotoObject) =>
  ({
    original: require(`@/img/${opts.img}`).default,
    thumbnail: require(`@/img/thumb.${opts.img}`).default,
    alt: opts.alt,
    caption: opts.caption,
  } as Photo);

const photos = {
  duckPillow: makePhotoObject({
    img: "tuck-duck-pillow.jpg",
    alt: "Tucker resting his head on a pillow",
    caption: "Never nap without your duck friend!",
  }),
  duckSuck: makePhotoObject({
    img: "tuck-ducksuck.jpg",
    alt: "Tucker sucking on a purple toy duck",
    caption: "Enjoying a late afternoon duck suck",
  }),
  duckSuck2: makePhotoObject({
    img: "tuck-ducksuck-2.jpg",
    alt: "Tucker sucking on a yellow toy duck",
    caption: "I love my yellow duck the most",
  }),
  fiataWind: makePhotoObject({
    img: "tuck-fiata-wind.jpg",
    alt: "Tucker sticking his head out the window of the car",
    caption: "I'm a big fan of rides in the Miata!",
  }),
  hammock: makePhotoObject({
    img: "tuck-hammock.jpg",
    alt: "Tucker sitting in a hammock",
  }),
  polaroid: makePhotoObject({
    img: "tuck-polaroid.jpg",
    alt: "Tucker sitting in his crate with his duck, smiling for the camera",
  }),
  yawn: makePhotoObject({ img: "tuck-yawn2.jpg", alt: "Tucker yawning" }),
};

const TuckerPage: React.FC = () => {
  setTitle("Hi!");

  return (
    <PageContainer>
      <h1>Hi there, I'm Tucker!</h1>

      <p>
        Thanks for the pets! I am {TUCKER_AGE} years old. My favorite thing to
        do is to suck on my toy ducks. I have a few ducks: medium ducks, small
        ducks, huge ducks, tiny ducks, yellow ducks, green ducks, purple ducks,
        orange ducks, slightly more yellow ducks...basically every kind of duck.
        And a few more. Here's a few pictures of me.
      </p>

      <div className="imageGrid">
        <TuckImage photo={photos.polaroid} />
        <TuckImage photo={photos.duckSuck} />
        <TuckImage photo={photos.hammock} />
        <TuckImage photo={photos.duckPillow} />
        <TuckImage photo={photos.fiataWind} />
        <TuckImage photo={photos.duckSuck2} />
        <TuckImage photo={photos.yawn} />
      </div>
    </PageContainer>
  );
};

export default TuckerPage;
