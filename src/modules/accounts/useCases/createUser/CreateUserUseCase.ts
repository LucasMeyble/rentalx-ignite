import { inject, injectable } from "tsyringe";
import { hash } from "bcryptjs"

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUserRepository } from "../../repositories/IUserRepository";

@injectable()
class CreateUserUseCase{

  constructor(
    @inject("UsersRepository")
    private usersRepository: IUserRepository
  ){}

  async execute({ name, email, password, drive_license }: ICreateUserDTO): Promise<void>{

    const userAreadyExists = await this.usersRepository.findByEmail(email);

    if(userAreadyExists){
      throw new Error("USer already exists");
    }

    const passwordHash = await hash(password, 8);

    await this.usersRepository.create({
      name, 
      email, 
      password: passwordHash, 
      drive_license
    });

  }

}

export { CreateUserUseCase }