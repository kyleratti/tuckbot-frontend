const photo = (str: string) => ({
  original: require(`@/img/${str}`).default,
  thumbnail: require(`@/img/thumb.${str}`).default,
});

export const photos = [
  "tuck-bowtie.jpg",
  "tuck-couch.jpg",
  "tuck-cozy.jpg",
  "tuck-deck.jpg",
  "tuck-ducksuck.jpg",
  "tuck-fiata-wind.jpg",
  "tuck-fiata.jpg",
  "tuck-lazy.jpg",
  "tuck-noselick.jpg",
  "tuck-rainy.jpg",
  "tuck-stump.jpg",
  "tuck-yawn.jpg",
  "tuck-yawn2.jpg",
].map((str) => photo(str));
