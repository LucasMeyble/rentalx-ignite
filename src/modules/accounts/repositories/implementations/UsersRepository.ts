import { getRepository, Repository } from "typeorm";
import { User } from "../../entities/User";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUserRepository } from "../IUserRepository";


class UsersRepository implements IUserRepository{
  private repository: Repository<User>;

  constructor(){
    this.repository = getRepository(User);
  }

  async create({ name, email, password, drive_license }: ICreateUserDTO): Promise<void> {

    const user = this.repository.create({
      name, 
      email, 
      password, 
      drive_license 
    });

    await this.repository.save(user);
  }

  async findByEmail(email: string): Promise<User>{
    const user = await this.repository.findOne({email});
    return user;
  };

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne(id);
    return user;
  }


}

export { UsersRepository }