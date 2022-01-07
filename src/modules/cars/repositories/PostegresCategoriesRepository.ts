import { Category } from "../model/Category";
import { ICategoriesRepository, ICrateCategoryDTO } from "./ICategoriesRepository";



class PostegresCategoriesRepository implements ICategoriesRepository{
  findByName(name: string): Category {
    console.log(name);
    return null;
  }
  list(): Category[] {
    return  null;
  }
  create({name, description}: ICrateCategoryDTO): void {
    console.log(name, description);
  }

}

export { PostegresCategoriesRepository }