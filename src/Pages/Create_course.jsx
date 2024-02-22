import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Create_course() {
    //const location = useLocation();
    const navigate = useNavigate();
    const [courseName, setCourseName] = useState("");

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(courseName);
    try {
      const response = await axios.post('http://10.40.41.213:3000/cursos', {
        nombre: courseName,
      })
      console.log(response.data)
        //alert('Course created successfully')
        navigate("/list-course")
    } catch (error) {
        console.error(error)
        }
    }

    return (
        <div>
            <h1>Create course</h1>
            <form  onSubmit={handleSubmit} >
                <div>
                    <label>Course name</label>
                    <input type="text" value={courseName} onChange={(e) => setCourseName(e.target.value)} />
                </div>
                <div>
                    <button>Create course</button>
                </div>
            </form>
        </div>
    )
}

