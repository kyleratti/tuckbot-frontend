interface PhotoType {
  original: string;
  thumbnail: string;
  description?: string;
}

export const photos = [
  {
    original: require("@/img/tuck-bowtie.jpg"),
    thumbnail: require("@/img/thumb.tuck-bowtie.jpg"),
    description: "Handsome in a bowtie"
  },
  {
    original: require("@/img/tuck-couch.jpg"),
    thumbnail: require("@/img/thumb.tuck-couch.jpg"),
    description: "Enjoying the most relaxing couch position ever"
  },
  {
    original: require("@/img/tuck-cozy.jpg"),
    thumbnail: require("@/img/thumb.tuck-cozy.jpg"),
    description: "Snug as a duck with his Tuck"
  },
  {
    original: require("@/img/tuck-deck.jpg"),
    thumbnail: require("@/img/thumb.tuck-deck.jpg"),
    description: '"He\'s a silent guardian. A watchful protector."'
  },
  {
    original: require("@/img/tuck-ducksuck.jpg"),
    thumbnail: require("@/img/thumb.tuck-ducksuck.jpg")
  },
  {
    original: require("@/img/tuck-fiata-wind.jpg"),
    thumbnail: require("@/img/thumb.tuck-fiata-wind.jpg")
  },
  {
    original: require("@/img/tuck-fiata.jpg"),
    thumbnail: require("@/img/thumb.tuck-fiata.jpg"),
    description: "The only co-pilot I ever want"
  },
  {
    original: require("@/img/tuck-lazy.jpg"),
    thumbnail: require("@/img/thumb.tuck-lazy.jpg"),
    description: "Why shouldn't you lie down mid-walk and refuse to get up?"
  },
  {
    original: require("@/img/tuck-noselick.jpg"),
    thumbnail: require("@/img/thumb.tuck-noselick.jpg")
  },
  {
    original: require("@/img/tuck-rainy.jpg"),
    thumbnail: require("@/img/thumb.tuck-rainy.jpg")
  },
  {
    original: require("@/img/tuck-stump.jpg"),
    thumbnail: require("@/img/thumb.tuck-stump.jpg"),
    description: "Little old man boy"
  },
  {
    original: require("@/img/tuck-yawn.jpg"),
    thumbnail: require("@/img/thumb.tuck-yawn.jpg")
  },
  {
    original: require("@/img/tuck-yawn2.jpg"),
    thumbnail: require("@/img/thumb.tuck-yawn2.jpg")
  }
];
