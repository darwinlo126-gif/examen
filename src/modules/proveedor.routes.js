import { Router } from "express";
import * as usuarioCtr from "./proveedor.controller.js";
const router = Router();
router.get("/provedores",usuarioCtr.obtenerprovedores);
router.get("/provedores/:id",usuarioCtr.obtenerId);
router.put("/provedores/:id",usuarioCtr.actualizar);
router.post("/provedores",usuarioCtr.crear);
router.delete("/provedores/:id",usuarioCtr.borrar);
export default router;
