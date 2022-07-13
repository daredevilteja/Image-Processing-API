import express from 'express';
import { promises as fsPromises } from 'fs';
import path from 'path';
import resizeImage from '../../../utilities/imageResize';

const images = express.Router();

images.get('/', async (req, res) => {
  const filename = req.query.filename;
  const height = Number(req.query.height);
  const width = Number(req.query.width);
  const importedFileName = `images/${filename}.jpg`;
  const exportedFileName = `converted-images/${filename}_${width}x${height}_thumb.jpg`;

  // error handling
  if (!filename) {
    res.send('Please include a valid filename');
  }

  if (!width) {
    res.send('Please include a width > 0');
  }

  if (!height) {
    res.send('Please include a height > 0');
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
