import { Category } from '../model/Category';

interface ICrateCategoryDTO {
  name: string;
  description: string
}

class CategoriesRepository{

  private categories: Category[];

  constructor(){
    this.categories = [];
  }

  create({ name, description }: ICrateCategoryDTO): void{
    const category = new Category(); 
  
    //copiar os valores de todas as propriedades próprias enumeráveis de um ou mais objetos de origem para um objeto destino
    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
  }

  list(): Category[]{
    return this.categories;
  }

}

export { CategoriesRepository }