import express from "express";
import fs from "fs";
import bodyParser from "body-parser"

const app = express();

app.use(bodyParser.json());

const readData=()=>{
    try{
        const data=fs.readFileSync("./db.json")
        return JSON.parse(data)
    }catch(error){
        console.log(error)
    }
}
const writeData=(data)=>{
    try{
        fs.writeFileSync("./db.json", JSON.stringify(data))
    }catch(error){
        console.log(error)
    }
}
app.get("/", (req,res)=>{
    res.send("Welcome to my first API with Node js+")
})

// Api's Clientes
app.get("/clientes", (req, res)=>{
    const data= readData();
    res.json(data.Clientes)
});

app.get("/clientes/:id",(req,res)=>{
    const data=readData();
    const id=parseInt(req.params.id);
    const cliente=data.Clientes.find((cliente) => cliente.idCliente===id);
    res.json(cliente)
});

app.post("/clientes", (req, res)=>{
    const data= readData();
    const body=req.body;
    const newClient={
        idCliente: data.Clientes.length+1,
        ...body,
    }
    data.Clientes.push(newClient);
    writeData(data);
    res.json(newClient);
})

app.put("/clientes/:id",(req,res)=>{
    const data=readData();
    const body=req.body;
    const id=parseInt(req.params.id);
    const clientIndex=data.Clientes.findIndex((cliente)=>cliente.idCliente===id);
    data.Clientes[clientIndex]={
        ...data.Clientes[clientIndex],
        ...body,
    };
    writeData(data);
    res.json({message:"Cliente actualizado"})
})

app.delete("/clientes/:id",(req,res)=>{
    const data=readData();
    const id=parseInt(req.params.id);
    const clientIndex=data.Clientes.findIndex((cliente)=>cliente.idCliente===id);
    data.Clientes.splice(clientIndex,1);
    writeData(data)
    res.json({message:"Cliente borrado"})
});

// Api's Usuarios
app.get("/usuarios", (req, res)=>{
    const data= readData();
    res.json(data.Usuarios)
});

app.get("/usuarios/:id",(req,res)=>{
    const data=readData();
    const id=parseInt(req.params.id);
    const usuario=data.Usuarios.find((usuario) => usuario.idUsuario===id);
    res.json(usuario)
});

app.post("/usuarios", (req, res)=>{
    const data= readData();
    const body=req.body;
    const newUsuario={
        idUsuario: data.Usuarios.length+1,
        ...body,
    }
    data.Usuarios.push(newUsuario);
    writeData(data);
    res.json(newUsuario);
})

app.put("/usuarios/:id",(req,res)=>{
    const data=readData();
    const body=req.body;
    const id=parseInt(req.params.id);
    const usuarioIndex=data.Usuarios.findIndex((usuario)=>usuario.idUsuario===id);
    data.Usuarios[usuarioIndex]={
        ...data.Usuarios[usuarioIndex],
        ...body,
    };
    writeData(data);
    res.json({message:"Usuario actualizado"})
})

app.delete("/usuarios/:id",(req,res)=>{
    const data=readData();
    const id=parseInt(req.params.id);
    const usuarioIndex=data.Usuarios.findIndex((usuario)=>usuario.idUsuario===id);
    data.Usuarios.splice(usuarioIndex,1);
    writeData(data)
    res.json({message:"Usuario borrado"})
});

// Api's Recordatorios
app.get("/recordatorios", (req, res)=>{
    const data= readData();
    res.json(data.Recordatorios)
});

app.get("/recordatorios/:id",(req,res)=>{
    const data=readData();
    const id=parseInt(req.params.id);
    const recordatorio=data.Recordatorios.find((recordatorio) => recordatorio.idRecordatorio===id);
    res.json(recordatorio)
});

app.post("/recordatorios", (req, res)=>{
    const data= readData();
    const body=req.body;
    const newRecordatorio={
        idRecordatorio: data.Recordatorios.length+1,
        ...body,
    }
    data.Recordatorios.push(newRecordatorio);
    writeData(data);
    res.json(newRecordatorio);
})

app.put("/recordatorios/:id",(req,res)=>{
    const data=readData();
    const body=req.body;
    const id=parseInt(req.params.id);
    const recordatorioIndex=data.Recordatorios.findIndex((recordatorio)=>recordatorio.idRecordatorio===id);
    data.Recordatorios[recordatorioIndex]={
        ...data.Recordatorios[recordatorioIndex],
        ...body,
    };
    writeData(data);
    res.json({message:"Recordatorio actualizado"})
})

app.delete("/recordatorios/:id",(req,res)=>{
    const data=readData();
    const id=parseInt(req.params.id);
    const recordatorioIndex=data.Recordatorios.findIndex((recordatorio)=>recordatorio.idRecordatorio===id);
    data.Recordatorios.splice(recordatorioIndex,1);
    writeData(data)
    res.json({message:"Recordatorio borrado"})
});

// Api's Vehiculos
app.get("/vehiculos", (req, res)=>{
    const data= readData();
    res.json(data.Vehiculos)
});

app.get("/vehiculos/:id",(req,res)=>{
    const data=readData();
    const id=parseInt(req.params.id);
    const vehiculo=data.Vehiculos.find((vehiculo) => vehiculo.idVehiculo===id);
    res.json(vehiculo)
});

app.post("/vehiculos", (req, res)=>{
    const data= readData();
    const body=req.body;
    const newVehiculo={
        idVehiculo: data.Vehiculos.length+1,
        ...body,
    }
    data.Vehiculos.push(newVehiculo);
    writeData(data);
    res.json(newVehiculo);
})

app.put("/vehiculos/:id",(req,res)=>{
    const data=readData();
    const body=req.body;
    const id=parseInt(req.params.id);
    const vehiculoIndex=data.Vehiculos.findIndex((vehiculo)=>vehiculo.idVehiculo===id);
    data.Vehiculos[vehiculoIndex]={
        ...data.Vehiculos[vehiculoIndex],
        ...body,
    };
    writeData(data);
    res.json({message:"Vehiculo actualizado"})
})

app.delete("/vehiculos/:id",(req,res)=>{
    const data=readData();
    const id=parseInt(req.params.id);
    const vehiculoIndex=data.Vehiculos.findIndex((vehiculo)=>vehiculo.idVehiculo===id);
    data.Vehiculos.splice(vehiculoIndex,1);
    writeData(data)
    res.json({message:"Vehiculo borrado"})
});

// Api's Tipo Usuario
app.get("/tiposUsuarios", (req, res)=>{
    const data= readData();
    res.json(data.TiposUsuarios)
});

app.get("/tiposUsuarios/:id",(req,res)=>{
    const data=readData();
    const id=parseInt(req.params.id);
    const tipoUsuario=data.TiposUsuarios.find((tipoUsuario) => tipoUsuario.idTipoUsuario===id);
    res.json(tipoUsuario)
});

app.post("/tiposUsuarios", (req, res)=>{
    const data= readData();
    const body=req.body;
    const newTipoUsuario={
        idTipoUsuario: data.TiposUsuarios.length+1,
        ...body,
    }
    data.TiposUsuarios.push(newTipoUsuario);
    writeData(data);
    res.json(newTipoUsuario);
})

app.put("/tiposUsuarios/:id",(req,res)=>{
    const data=readData();
    const body=req.body;
    const id=parseInt(req.params.id);
    const tipoUsuarioIndex=data.TiposUsuarios.findIndex((tipoUsuario)=>tipoUsuario.idTipoUsuario===id);
    data.TiposUsuarios[tipoUsuarioIndex]={
        ...data.TiposUsuarios[tipoUsuarioIndex],
        ...body,
    };
    writeData(data);
    res.json({message:"Tipo Usuario actualizado"})
})

app.delete("/tiposUsuarios/:id",(req,res)=>{
    const data=readData();
    const id=parseInt(req.params.id);
    const tipoUsuarioIndex=data.TiposUsuarios.findIndex((tipoUsuario)=>tipoUsuario.idTipoUsuario===id);
    data.TiposUsuarios.splice(tipoUsuarioIndex,1);
    writeData(data)
    res.json({message:"Tipo Usuario borrado"})
});

// Api's Ordenes de Trabajo
app.get("/ordenesTrabajo", (req, res)=>{
    const data= readData();
    res.json(data.OrdenesTrabajos)
});

app.get("/ordenesTrabajo/:id",(req,res)=>{
    const data=readData();
    const id=parseInt(req.params.id);
    const ordenTrabajo=data.OrdenesTrabajos.find((ordenTrabajo) => ordenTrabajo.idOrdenTrabajo===id);
    res.json(ordenTrabajo)
});

app.post("/ordenesTrabajo", (req, res)=>{
    const data= readData();
    const body=req.body;
    const newOrdenTrabajo={
        idOrdenTrabajo: data.OrdenesTrabajos.length+1,
        ...body,
    }
    data.OrdenesTrabajos.push(newOrdenTrabajo);
    writeData(data);
    res.json(newOrdenTrabajo);
})

app.put("/ordenesTrabajo/:id",(req,res)=>{
    const data=readData();
    const body=req.body;
    const id=parseInt(req.params.id);
    const ordenTrabajoIndex=data.OrdenesTrabajos.findIndex((ordenTrabajo)=>ordenTrabajo.idOrdenTrabajo===id);
    data.OrdenesTrabajos[ordenTrabajoIndex]={
        ...data.OrdenesTrabajos[ordenTrabajoIndex],
        ...body,
    };
    writeData(data);
    res.json({message:"Orden de Trabajo actualizada"})
})

app.delete("/ordenesTrabajo/:id",(req,res)=>{
    const data=readData();
    const id=parseInt(req.params.id);
    const ordenTrabajoIndex=data.OrdenesTrabajos.findIndex((ordenTrabajo)=>ordenTrabajo.idOrdenTrabajo===id);
    data.OrdenesTrabajos.splice(ordenTrabajoIndex,1);
    writeData(data)
    res.json({message:"Orden de trabajo borrada"})
});

// Api's de reparaciones
app.get("/reparaciones", (req, res)=>{
    const data= readData();
    res.json(data.Reparaciones)
});

app.get("/reparaciones/:id",(req,res)=>{
    const data=readData();
    const id=parseInt(req.params.id);
    const reparacion=data.Reparaciones.find((reparacion) => reparacion.idReparacion===id);
    res.json(reparacion)
});

app.post("/reparaciones", (req, res)=>{
    const data= readData();
    const body=req.body;
    const newReparacion={
        idReparacion: data.Reparaciones.length+1,
        ...body,
    }
    data.Reparaciones.push(newReparacion);
    writeData(data);
    res.json(newReparacion);
})

app.put("/reparaciones/:id",(req,res)=>{
    const data=readData();
    const body=req.body;
    const id=parseInt(req.params.id);
    const reparacionIndex=data.Reparaciones.findIndex((reparacion)=>reparacion.idReparacion===id);
    data.Reparaciones[reparacionIndex]={
        ...data.Reparaciones[reparacionIndex],
        ...body,
    };
    writeData(data);
    res.json({message:"Reparacion actualizada"})
})

app.delete("/reparaciones/:id",(req,res)=>{
    const data=readData();
    const id=parseInt(req.params.id);
    const reparacionIndex=data.Reparaciones.findIndex((reparacion)=>reparacion.idReparacion===id);
    data.Reparaciones.splice(reparacionIndex,1);
    writeData(data)
    res.json({message:"Reparacion borrada"})
});

// Api's soportes
app.get("/soportes", (req, res)=>{
    const data= readData();
    res.json(data.Soportes)
});

app.get("/soportes/:id",(req,res)=>{
    const data=readData();
    const id=parseInt(req.params.id);
    const soporte=data.Soportes.find((soporte) => soporte.idSoporte===id);
    res.json(soporte)
});

app.post("/soportes", (req, res)=>{
    const data= readData();
    const body=req.body;
    const newSoporte={
        idSoporte: data.Soportes.length+1,
        ...body,
    }
    data.Soportes.push(newSoporte);
    writeData(data);
    res.json(newSoporte);
})

app.put("/soportes/:id",(req,res)=>{
    const data=readData();
    const body=req.body;
    const id=parseInt(req.params.id);
    const soporteIndex=data.Soportes.findIndex((soporte)=>soporte.idSoporte===id);
    data.Soportes[soporteIndex]={
        ...data.Soportes[soporteIndex],
        ...body,
    };
    writeData(data);
    res.json({message:"Soporte actualizado"})
})

app.delete("/soportes/:id",(req,res)=>{
    const data=readData();
    const id=parseInt(req.params.id);
    const soporteIndex=data.Soportes.findIndex((soporte)=>soporte.idSoporte===id);
    data.Soportes.splice(soporteIndex,1);
    writeData(data)
    res.json({message:"Soporte borrado"})
});

// Api's Requerimientos
app.get("/requerimientos", (req, res)=>{
    const data= readData();
    res.json(data.Requerimientos)
});

app.get("/requerimientos/:id",(req,res)=>{
    const data=readData();
    const id=parseInt(req.params.id);
    const requerimiento=data.Requerimientos.find((requerimiento) => requerimiento.idRequerimiento===id);
    res.json(requerimiento)
});

app.post("/requerimientos", (req, res)=>{
    const data= readData();
    const body=req.body;
    const newRequerimiento={
        idRequerimiento: data.Requerimientos.length+1,
        ...body,
    }
    data.Requerimientos.push(newRequerimiento);
    writeData(data);
    res.json(newRequerimiento);
})

app.put("/requerimientos/:id",(req,res)=>{
    const data=readData();
    const body=req.body;
    const id=parseInt(req.params.id);
    const requerimientoIndex=data.Requerimientos.findIndex((requerimiento)=>requerimiento.idRequerimiento===id);
    data.Requerimientos[requerimientoIndex]={
        ...data.Requerimientos[requerimientoIndex],
        ...body,
    };
    writeData(data);
    res.json({message:"Requerimiento actualizado"})
})

app.delete("/requerimientos/:id",(req,res)=>{
    const data=readData();
    const id=parseInt(req.params.id);
    const requerimientoIndex=data.Requerimientos.findIndex((requerimiento)=>requerimiento.idRequerimiento===id);
    data.Requerimientos.splice(requerimientoIndex,1);
    writeData(data)
    res.json({message:"Requerimiento borrado"})
});

// Api's Tipo Orden
app.get("/tiposOrdenes", (req, res)=>{
    const data= readData();
    res.json(data.TiposOrdenes)
});

app.get("/tiposOrdenes/:id",(req,res)=>{
    const data=readData();
    const id=parseInt(req.params.id);
    const tipoOrden=data.TiposOrdenes.find((tipoOrden) => tipoOrden.idTipoOrden===id);
    res.json(tipoOrden)
});

app.post("/tiposOrdenes", (req, res)=>{
    const data= readData();
    const body=req.body;
    const newTipoOrden={
        idTipoOrden: data.TiposOrdenes.length+1,
        ...body,
    }
    data.TiposOrdenes.push(newTipoOrden);
    writeData(data);
    res.json(newTipoOrden);
})

app.put("/tiposOrdenes/:id",(req,res)=>{
    const data=readData();
    const body=req.body;
    const id=parseInt(req.params.id);
    const tipoOrdenIndex=data.TiposOrdenes.findIndex((tipoOrden)=>tipoOrden.idTipoOrden===id);
    data.TiposOrdenes[tipoOrdenIndex]={
        ...data.TiposOrdenes[tipoOrdenIndex],
        ...body,
    };
    writeData(data);
    res.json({message:"Tipo Orden actualizada"})
})

app.delete("/tiposOrdenes/:id",(req,res)=>{
    const data=readData();
    const id=parseInt(req.params.id);
    const tipoOrdenIndex=data.TiposOrdenes.findIndex((tipoOrden)=>tipoOrden.idTipoOrden===id);
    data.TiposOrdenes.splice(tipoOrdenIndex,1);
    writeData(data)
    res.json({message:"Tipo Orden borrado"})
});

// Api's Inventario
app.get("/inventarios", (req, res)=>{
    const data= readData();
    res.json(data.Inventarios)
});

app.get("/inventarios/:id",(req,res)=>{
    const data=readData();
    const id=parseInt(req.params.id);
    const inventario=data.Inventarios.find((inventario) => inventario.idInventario===id);
    res.json(inventario)
});

app.post("/inventarios", (req, res)=>{
    const data= readData();
    const body=req.body;
    const newInventario={
        idInventario: data.Inventarios.length+1,
        ...body,
    }
    data.Inventarios.push(newInventario);
    writeData(data);
    res.json(newInventario);
})

app.put("/inventarios/:id",(req,res)=>{
    const data=readData();
    const body=req.body;
    const id=parseInt(req.params.id);
    const inventarioIndex=data.Inventarios.findIndex((inventario)=>inventario.idInventario===id);
    data.Inventarios[inventarioIndex]={
        ...data.Inventarios[inventarioIndex],
        ...body,
    };
    writeData(data);
    res.json({message:"Inventario actualizado"})
})

app.delete("/inventarios/:id",(req,res)=>{
    const data=readData();
    const id=parseInt(req.params.id);
    const inventarioIndex=data.Inventarios.findIndex((inventario)=>inventario.idInventario===id);
    data.Inventarios.splice(inventarioIndex,1);
    writeData(data)
    res.json({message:"Inventario borrado"})
});

// Api's Repuestos
app.get("/repuestos", (req, res)=>{
    const data= readData();
    res.json(data.Repuestos)
});

app.get("/repuestos/:id",(req,res)=>{
    const data=readData();
    const id=parseInt(req.params.id);
    const repuesto=data.Repuestos.find((repuesto) => repuesto.idRepuesto===id);
    res.json(repuesto)
});

app.post("/repuestos", (req, res)=>{
    const data= readData();
    const body=req.body;
    const newRepuesto={
        idRepuesto: data.Repuestos.length+1,
        ...body,
    }
    data.Repuestos.push(newRepuesto);
    writeData(data);
    res.json(newRepuesto);
})

app.put("/repuestos/:id",(req,res)=>{
    const data=readData();
    const body=req.body;
    const id=parseInt(req.params.id);
    const repuestoIndex=data.Repuestos.findIndex((repuesto)=>repuesto.idRepuesto===id);
    data.Repuestos[repuestoIndex]={
        ...data.Repuestos[repuestoIndex],
        ...body,
    };
    writeData(data);
    res.json({message:"Repuesto actualizado"})
})

app.delete("/repuestos/:id",(req,res)=>{
    const data=readData();
    const id=parseInt(req.params.id);
    const repuestoIndex=data.Repuestos.findIndex((repuesto)=>repuesto.idRepuesto===id);
    data.Repuestos.splice(repuestoIndex,1);
    writeData(data)
    res.json({message:"Repuesto borrado"})
});

app.listen(3000, ()=>{
    console.log('Server listening on port 3000')
})
