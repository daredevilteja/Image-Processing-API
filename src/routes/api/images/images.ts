import express from 'express';
import resizeImage from '../../../utilities/imageResize';

const images = express.Router();

images.get('/', (req, res) => {
  const importedFileName = `images/${req.query.filename}.jpg`;
  const exportedFileName = `converted-images/${req.query.filename}_thumb.jpg`;
  const height = Number(req.query.height);
  const width = Number(req.query.width);
  resizeImage(importedFileName, exportedFileName, height, width);
  res.sendStatus(200);
});

export default images;
