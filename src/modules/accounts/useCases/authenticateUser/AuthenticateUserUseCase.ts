import { IUserRepository } from "../../repositories/IUserRepository";
import { inject, injectable } from "tsyringe";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { AppError } from "../../../../errors/AppError";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse{
  user: {
    name: string,
    email: string
  };
  token: string
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUserRepository
  ){}

  async execute({ email, password }: IRequest): Promise<IResponse>{

    const user = await this.usersRepository.findByEmail(email);

    if(!user){
      throw new AppError("Email or password incorrect")
    }

    const passwordMatch = compare(password, user.password);

    if(!passwordMatch){
      throw new AppError("Email or password incorrect");
    }

    const token = sign({}, "dc53fc4f621c80bdc2fa0329a6123708", {
      subject: user.id,
      expiresIn: "1d"
    });

    const tokenReturn: IResponse = {
      token,
      user: {
        name: user.name,
        email: user.email
      }
    }

    return tokenReturn;

  }

}

export { AuthenticateUserUseCase }