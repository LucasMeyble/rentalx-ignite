import { Request, response, Response } from "express"; 
import { container } from "tsyringe";
import { UpdateUserAvatarUseCase } from "./UpdateUserAvatarUseCase";

class UpdateUserAvatarController {
  async handle(req: Request, res: Response): Promise<Response>{
    const { id } = req.user;
    const avatar_file = req.file.filename;

    const updateUserAvatarUserCase = container.resolve(UpdateUserAvatarUseCase);

    await updateUserAvatarUserCase.execute({ user_id: id, avatar_file });

    return response.status(204).send();
  }
}

export { UpdateUserAvatarController }