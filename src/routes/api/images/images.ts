import express from 'express';
import resizeImage from '../../../utilities/imageResize';

const images = express.Router();

images.get('/', (req, res) => {
  const importedFileName = `${req.query.filename}.jpg`;
  const exportedFileName = `${req.query.filename}_thumb.jpg`;
  const height = Number(req.query.height);
  const width = Number(req.query.width);
  resizeImage(importedFileName, exportedFileName, height, width);
});

export default images;
