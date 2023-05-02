import Layout from "@/src/components/Layout";
import Link from "next/link";

export default function Productos() {

    return(
        <Layout>
            <Link className={"bg-blue-600 text-white rounded-md py-1 px-2"} href={"/Productos/Nuevo"}>Agregar nuevo producto</Link>
        </Layout>
    );

}