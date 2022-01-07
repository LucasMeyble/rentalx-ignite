import { ISpecificationsRepository, ICreateSpecificationDTO } from "./ISpecificationsRepository";
import { Specification } from '../model/Specification';

class SpecificationsRepository implements ISpecificationsRepository{

  private specifications: Specification[];

  constructor(){
    this.specifications = [];
  }
  

  create({ name, description }: ICreateSpecificationDTO): void {

    const specification = new Specification();

    Object.assign(specification, {
      name, 
      description,
      created_at: new Date()
    })

    this.specifications.push(specification);

  }

  findByName(name: string): Specification {
  
    const specification = this.specifications.find(Specification => specification.name === name);

    return specification;

  }

  list(): Specification[]{
    return  this.specifications;
  }

}

export { SpecificationsRepository }