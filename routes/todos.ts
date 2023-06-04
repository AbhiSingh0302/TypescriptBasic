import { Router } from "express";

const router = Router();

router.get('/',(req,res,next) => {
    res.status(200);
})

export default router;