import Layout from "@/src/components/Layout";
import {useState} from "react";
import axios from "axios";

export default function Nuevo() {

    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState('');
    
    async function guardarProducto(ev) {
        ev.preventDefault();
        const data = {nombre,descripcion,precio}
        await axios.post('', data)
    }
    return (
        <Layout>

            <form onSubmit={guardarProducto}>
                <h1>Nuevo Producto</h1>
                <label>Nombre del producto</label>
                <input
                    type={"text"}
                    placeholder={"nombre del producto"}
                    value={nombre}
                    onChange={ev => setNombre(ev.target.value)}
                />
                <label>Descripcion</label>
                <textarea
                    placeholder={"descripcion"}
                    value={descripcion}
                    onChange={ev => setDescripcion(ev.target.value)}
                ></textarea>
                <label>Precio (MXN)</label>
                <input
                    type={"number"}
                    placeholder={"precio"}
                    value={precio}
                    onChange={ev => setPrecio(ev.target.value)}
                />
                <button type={"submit"} className={"btn-primary"}>Guardar</button>
            </form>
        </Layout>
    );

}