import { Request, Response } from "express";

import { container } from "tsyringe";
import { CreateSpecificationUserCase } from "./CreateSpecificationUserCase";

class CreateSpacificationController {
  
  async handle(req: Request, res: Response): Promise<Response>{
    const { name, description } = req.body;

    const createSpecificationController = container.resolve(CreateSpecificationUserCase)
  
    await createSpecificationController.execute({name, description});
  
    return res.status(201).send();
  }
}

export { CreateSpacificationController }