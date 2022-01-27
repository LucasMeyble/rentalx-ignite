import { inject } from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUserRepository } from "../../repositories/IUserRepository";


class CreateUserUserCase{

  constructor(
    @inject("UsersRepository")
    private usersRepository: IUserRepository
  ){

  }

  async execute({ name, username, email, password, driver_license }: ICreateUserDTO): Promise<void>{

    await this.usersRepository.create({
      name, 
      username,
      email, 
      password, 
      driver_license
    });

  }

}

export { CreateUserUserCase }