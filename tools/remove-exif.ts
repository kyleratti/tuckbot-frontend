import * as fs from "fs";
import * as minimist from "minimist";
import { resolve, join } from "path";
import * as piexif from "piexifjs";

/**
 * Remove exif data from the specified image
 * @param file The path to the file
 * @param write Whether or not the exif-removed image file should be written back to disk. Defaults to true.
 * @returns Binary string of the data
 */
export default function removeExif(file: string, write = true): string {
  let imgData = fs.readFileSync(file).toString("binary");
  let newImgData = piexif.remove(imgData);

  if (write) {
    fs.writeFileSync(file, newImgData, "binary");
  }

  return newImgData;
}

if (require.main === module) {
  let args = minimist(process.argv.slice(2));

  if (!args["source"])
    throw new Error("'source' parameter not provided; bailing");

  const srcDir = resolve(args["source"]);
  let files = fs.readdirSync(srcDir);

  console.log(`removing exif data for ${files.length} files in '${srcDir}'`);

  files.forEach(file => {
    let filePath = resolve(join(srcDir, file));

    if (fs.lstatSync(filePath).isDirectory()) return;

    removeExif(filePath, true);
  });

  console.log(`removed exif data for ${files.length} files`);
}
