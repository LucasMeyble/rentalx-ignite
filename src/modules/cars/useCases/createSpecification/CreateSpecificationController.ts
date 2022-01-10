import { Request, Response } from "express";

import { CreateSpecificationUserCase } from "./CreateSpecificationUserCase";


class CreateSpacificationController {
  
  constructor(private CreateSpecificationUserCase: CreateSpecificationUserCase){};
  
  handle(req: Request, res: Response): Response{
    const { name, description } = req.body;
  
    this.CreateSpecificationUserCase.execute({name, description});
  
    return res.status(201).send();
  }
}

export { CreateSpacificationController }