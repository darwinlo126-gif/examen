import db from "../config/dbConexion.js"
import bcrypt from "bcryptjs";

export const provedorModel = {
  traerTodos: async () => {
    const [rows] = await db.query("select * from provedor");
    return rows;
  },
  traerID: async (id) => {
    const [rows] = await db.query("select * from provedor where id_proveedor=?", [id]);
    return rows;
  },
  Eliminar: async (id) => {
    const [rows] = await db.query("delete from provedor where id_proveedor=?", [id]);
    return rows;
  },
  crear: async (data) => {
     const [existeNit] = await db.query(
      "select * from provedor where nit=?",
      [data.nit],
    );
    if (existeNit.length > 0) {
      throw new Error("Error ese nit  ya existe ");
    }
    const [existeEmail] = await db.query(
      "select * from provedor where email=?",
      [data.email],
    );
    if (existeEmail.length > 0) {
      throw new Error("Error ese email ya existe ");
    }
      const fecha = data.fecha_creacion
    ? new Date(data.fecha_creacion)
    : new Date();

  if (isNaN(fecha.getTime())) {
    throw new Error("La fecha_creacion no es válida");
  }

    
    const nuevoUsuario = {
      nit: data.nit,
      razon_social: data.razon_social,
      contacto: data.contacto,
      email: data.email,
      telefono: data.telefono,
      ciudad:data.ciudad,
      estado: data.estado,
      
    };
    const [rows] = await db.query("insert into provedor set ?", [nuevoUsuario]);
    return rows;
  },
  actualizar: async (id, data) => {
    const [rows] = await db.query(
      "update provedor set ? where id_proveedor =?",[data, id]    
    );
    return rows;
  },
};
