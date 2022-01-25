import { Router } from 'express';
import  multer  from 'multer';

import { CreateCategoryController } from '../modules/cars/services/useCases/createCategory/CrateCategoryController';
import { listCategoriesController } from '../modules/cars/services/useCases/listCategories';
import { importCategorycontroller } from '../modules/cars/services/useCases/importCategory';

const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();

categoriesRoutes.post('/', createCategoryController.handle);

categoriesRoutes.get('/', (req, res) => {
  console.log('teste');
  return listCategoriesController.handle(req, res);
});

categoriesRoutes.post('/import', upload.single("file"), (req, res) => {
  return importCategorycontroller.handle(req, res);
})

export { categoriesRoutes };