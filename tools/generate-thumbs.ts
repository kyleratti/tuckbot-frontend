import * as fs from "fs";
import { lstatSync } from "fs";
import * as imageThumbnail from "image-thumbnail";
import * as minimist from "minimist";
import { basename, join, resolve } from "path";
import removeExif from "./remove-exif";

const args = minimist(process.argv.slice(2));

if (!args["source"])
  throw new Error("'source' parameter not provided; bailing");

const srcDir = resolve(args["source"]);

const files = fs
  .readdirSync(srcDir)
  .filter((file) => file.substr(0, 6) !== "thumb.");

console.log(`generating thumbnails for ${files.length} files in '${srcDir}'`);

files.forEach(async (file) => {
  const filePath = resolve(join(srcDir, file));
  const fileName = basename(filePath);
  const fileNameSplit = fileName.split(".");
  const fileExt = fileNameSplit[fileNameSplit.length - 1];
  const outputPath = resolve(join(srcDir, `thumb.${fileName}`));

  if (lstatSync(filePath).isDirectory()) return;

  if (["jpg", "jpeg"].includes(fileExt)) removeExif(filePath, true);
  else
    console.warn(
      `Unable to remove exif data from ${filePath}; ensure this is intentional`
    );

  const thumb = await imageThumbnail(filePath, {
    width: 350,
    height: 250,
    responseType: "buffer",
  });

  fs.writeFileSync(outputPath, thumb, "binary");
});

console.log(`generated ${files.length} thumbnails`);
