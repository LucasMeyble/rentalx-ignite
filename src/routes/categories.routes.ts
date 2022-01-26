import { Router } from 'express';
import  multer  from 'multer';

import { CreateCategoryController } from '../modules/cars/services/useCases/createCategory/CrateCategoryController';
import { ListCategoriesController } from '../modules/cars/services/useCases/listCategories/ListCategoriesController';
import { ImportCategoryController } from '../modules/cars/services/useCases/importCategory/ImportCategoryController';

const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();
const importCategorycontroller = new ImportCategoryController();
const listCategoriesController = new ListCategoriesController();

categoriesRoutes.post('/', createCategoryController.handle);

categoriesRoutes.get('/', listCategoriesController.handle);

categoriesRoutes.post('/import', importCategorycontroller.handle)

export { categoriesRoutes };