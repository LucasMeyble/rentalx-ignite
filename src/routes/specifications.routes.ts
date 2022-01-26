import { Router } from "express";
import { CreateSpacificationController } from "../modules/cars/services/useCases/createSpecification/CreateSpecificationController";

const specificationRoutes = Router();

const createSpecificationController = new CreateSpacificationController();

specificationRoutes.post("/", createSpecificationController.handle);

export { specificationRoutes }