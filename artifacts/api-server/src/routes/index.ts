import { Router, type IRouter } from "express";
import healthRouter from "./health";
import subscribeRouter from "./subscribe";
import contactRouter from "./contact";

const router: IRouter = Router();

router.use(healthRouter);
router.use(subscribeRouter);
router.use(contactRouter);

export default router;
