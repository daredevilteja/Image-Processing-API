const sharp = require('sharp');

const resizeImage = async (
  importedFileName: string,
  exportedFileName: string,
  width: number | undefined,
  height: number | undefined
) => {
  try {
    await sharp(importedFileName)
      .resize({
        width,
        height
      })
      .toFile(exportedFileName);
  } catch (error) {
    console.log(error);
  }
};

export default resizeImage;
