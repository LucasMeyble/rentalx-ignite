import { Router } from 'express';
import  multer  from 'multer';

import  createCategoryController  from '../modules/cars/services/useCases/createCategory';
import { listCategoriesController } from '../modules/cars/services/useCases/listCategories';
import { importCategorycontroller } from '../modules/cars/services/useCases/importCategory';

const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

categoriesRoutes.post('/', (req, res) => {
  return createCategoryController().handle(req, res);
});

categoriesRoutes.get('/', (req, res) => {
  console.log('teste');
  return listCategoriesController.handle(req, res);
});

categoriesRoutes.post('/import', upload.single("file"), (req, res) => {
  return importCategorycontroller.handle(req, res);
})

export { categoriesRoutes };