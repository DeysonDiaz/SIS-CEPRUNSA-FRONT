import { useEffect, useState } from "react"
import axios from "axios";

export default function List_course() {

    const [cursos, setCursos] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        try {
            const response = await axios.get('http://10.40.41.213:3000/cursos')
            console.log(response.data)
            setCursos(response.data)
        } catch (error) {
            console.error(error)
        }
    }
    return (


        <div className="overflow-x-auto">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                <thead className="ltr:text-left rtl:text-right">
                    <tr>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Id</th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Nombre</th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-200">
                    {
                        cursos.map((curso) => (
                            <tr key={curso.id_curso}>
                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{curso.id_curso}</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">{curso.nombre}</td>
                            </tr>))
                    }
                </tbody>
            </table>
        </div>
    )
}