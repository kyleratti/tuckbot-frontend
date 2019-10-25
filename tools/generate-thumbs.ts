import * as fs from "fs";
import { lstatSync } from "fs";
import * as imageThumbnail from "image-thumbnail";
import * as minimist from "minimist";
import { basename, join, resolve } from "path";
import removeExif from "./remove-exif";

let args = minimist(process.argv.slice(2));

if (!args["source"])
  throw new Error("'source' parameter not provided; bailing");

const srcDir = resolve(args["source"]);

let files = fs.readdirSync(srcDir);

console.log(`generating thumbnails for ${files.length} files in '${srcDir}'`);

files.forEach(async file => {
  let filePath = resolve(join(srcDir, file));
  let fileName = basename(filePath);
  let outputPath = resolve(join(srcDir, `thumb.${fileName}`));

  if (lstatSync(filePath).isDirectory()) return;

  removeExif(filePath, true);

  let thumb = await imageThumbnail(filePath, {
    percentage: 15,
    responseType: "buffer"
  });

  fs.writeFileSync(outputPath, thumb, "binary");
});

console.log(`generated ${files.length} thumbnails`);
