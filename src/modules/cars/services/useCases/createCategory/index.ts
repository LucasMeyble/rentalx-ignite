import { CategoriesRepository } from "../../../repositories/implementations/CategoriesRepository";
import { CreateCategoryContreoller } from "./CrateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

export default (): CreateCategoryContreoller  => {
  const categoriesRepository = new CategoriesRepository();
  const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);
  const createCategoryController = new CreateCategoryContreoller(createCategoryUseCase);
  
  return createCategoryController; 
}

