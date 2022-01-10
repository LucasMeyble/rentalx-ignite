import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { CreateSpacificationController } from "./CreateSpecificationController";
import { CreateSpecificationUserCase } from "./CreateSpecificationUserCase";


const specificationsRepositor = new SpecificationsRepository();
const createSpecificationUseCase = new CreateSpecificationUserCase(specificationsRepositor);
const createSpecificationController = new CreateSpacificationController(createSpecificationUseCase);

export { createSpecificationController }