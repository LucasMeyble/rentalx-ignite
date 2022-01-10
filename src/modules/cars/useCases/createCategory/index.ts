import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { CreateCategoryContreoller } from "./CrateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";


const categoriesRepository = CategoriesRepository.getInstance();
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);
const createCategoryController = new CreateCategoryContreoller(createCategoryUseCase);

export { createCategoryController }