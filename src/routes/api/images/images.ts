import express from 'express';
import { promises as fsPromises } from 'fs';
import path from 'path';
import resizeImage from '../../../utilities/imageResize';

const images = express.Router();
const applicableFiles = [
  'encenadaport',
  'fjord',
  'icelandwaterfall',
  'palmtunnel',
  'santamonica'
];

images.get('/', async (req, res) => {
  const filename = String(req.query.filename);
  const height = Number(req.query.height);
  const width = Number(req.query.width);
  const importedFileName = `images/${filename}.jpg`;
  const exportedFileName = `converted-images/${filename}_${width}x${height}_thumb.jpg`;

  // error handling
  if (!applicableFiles.includes(filename)) {
    res.send('Please include a valid filename');
    return;
  }

  if (!width) {
    res.send('Please include a width > 0');
    return;
  }

  if (!height) {
    res.send('Please include a height > 0');
    return;
  }

  // caching logic
  try {
    await fsPromises.readFile(exportedFileName);
    console.log(
      `cached file is used for ${exportedFileName} from converted images folder`
    );
  } catch (err) {
    await resizeImage(importedFileName, exportedFileName, height, width);

    console.log(
      `New image is created for ${exportedFileName} in converted images folder`
    );
  }

  // command used for sending a file
  res.sendFile(path.resolve(exportedFileName));
});

export default images;
