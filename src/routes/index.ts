import express from 'express';
import images from './api/images/images';

const routes = express.Router();

routes.get('/', (req: express.Request, res: express.Response): void => {
  res.send('Server started successfully');
});

routes.use('/images', images);

export default routes;
