import sharp from 'sharp';

const resizeImage = async (
  importedFileName: string,
  exportedFileName: string,
  width: number,
  height: number
): Promise<void> => {
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
