import { Router } from 'express';
import catalogRoutes from './catalogRoutes';
import groceryRoutes from './groceryRoutes';
import recipesRoutes from './recipesRoutes';
import userRoutes from './userRoutes';

const routes = Router();

routes.use('/catalog', catalogRoutes);
routes.use('/grocery', groceryRoutes);
routes.use('/recipes', recipesRoutes);
routes.use('/user', userRoutes);

export default routes;