import { Router } from 'express';
import { Category } from '../model/Category';

const categoriesRoutes = Router();

const categories: Category[] = [];

categoriesRoutes.post('/', (req, res) => {
  const { name, description } = req.body;

  const category = new Category(); 
  
  //copiar os valores de todas as propriedades próprias enumeráveis de um ou mais objetos de origem para um objeto destino
  Object.assign(category, {
    name,
    description,
    created_at: new Date(),
  });

  categories.push(category);

  return res.status(201).json(categories).send();
});

export { categoriesRoutes };
