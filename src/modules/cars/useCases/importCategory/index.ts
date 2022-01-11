import { ImportCategoryController } from './ImportCategoryController';
import { ImportCategoryUseCase } from './ImportCategoryUseCase';

const importCategoryUseCase = new ImportCategoryUseCase();
const importCategorycontroller = new ImportCategoryController(importCategoryUseCase);

export { importCategorycontroller };