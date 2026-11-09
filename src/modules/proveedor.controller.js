import { provedorModel } from "./proveedor.model.js";
export const obtenerprovedores = async (req, res) => {
  try {
    const resultado = await provedorModel.traerTodos();
    res.json({ resultado });
  } catch (error) {
    res
      .status(500)
      .json({ status: "error", error: `Error al listar: ${error}` });
  }
};
export const obtenerId = async (req, res) => {
  try {
    const resultado = await provedorModel.traerID(req.params.id);
    res.json({ resultado });
  } catch (error) {
    res.status(500).json({ error: `Error al listar: ${error}` });
  }
};
export const crear = async (req, res) => {
  const datos = {
    nit: req.body.nit,
      razon_social: req.body.razon_social,
      contacto: req.body.contacto,
      email: req.body.email,
      telefono: req.body.telefono,
      ciudad:req.body.ciudad,
      estado: req.body.estado,
      fecha_creacion:req.body.fecha_creacion
  };
  try {
    const resultado = await provedorModel.crear(datos);
    res.json({ resultado });
  } catch (error) {
    res.status(500).json({ error: `Error al crear: ${error}` });
  }
};
export const borrar = async (req, res) => {
  try {
    const resultado = await provedorModel.Eliminar(req.params.id);
    res.json({ resultado });
  } catch (error) {
    res.status(500).json({
      error: `Error al eliminar: ${error}`,
    });
  }
};
export const actualizar = async (req, res) => {
  try {
    const resultado = await provedorModel.actualizar(req.params.id,req.body);
    res.json({ resultado });
  } catch (error) {
    res.status(500).json({
      error: `Error al actualizar : ${error}`,
    });
  }
};
