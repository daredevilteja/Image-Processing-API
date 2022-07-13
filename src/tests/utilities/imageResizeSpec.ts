import { promises as fsPromises } from 'fs';
import path from 'path';
import resizeImage from '../../utilities/imageResize';

describe('Test from image resizing', () => {
  it('testing valid images through resize function', async () => {
    await resizeImage(
      'images/fjord.jpg',
      'converted-images/fjord_600x600_thumb.jpg',
      600,
      600
    );
    let result: string | null = null;
    try {
      await fsPromises.access(
        path.resolve('converted-images/fjord_600x600_thumb.jpg')
      );
    } catch (err) {
      result = 'Error';
    }

    expect(result).toBeNull();
  });

  it('testing invalid images through resize function', async () => {
    await resizeImage(
      'images/ford.jpg',
      'converted-images/ford_600x600_thumb.jpg',
      600,
      600
    );
    let result: string | null = null;
    try {
      await fsPromises.access(
        path.resolve('converted-images/ford_600x600_thumb.jpg')
      );
    } catch (err) {
      result = 'Error';
    }

    expect(result).not.toBeNull();
  });
});
