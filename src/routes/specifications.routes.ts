import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateSpacificationController } from "../modules/cars/services/useCases/createSpecification/CreateSpecificationController";

const specificationRoutes = Router();

const createSpecificationController = new CreateSpacificationController();

specificationRoutes.use(ensureAuthenticated)
specificationRoutes.post("/", createSpecificationController.handle);

export { specificationRoutes }