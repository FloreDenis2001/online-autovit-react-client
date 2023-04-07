
import { useNavigate } from "react-router-dom";
import { Interface } from "readline"
import Masina from "../../../models/Masina"


interface CarProps{
  
    car:Masina;
}




export const Car: React.FC<CarProps>= ({car}) => {

    let navigate=useNavigate();
   
    let getId=():void=>{
       

        navigate("/update/"+car.id);
     
    }

    return (
        <tr>
            <td>{car.marca}</td>
            <td onClick={getId}>{car.model}</td>
            <td>{car.culoare}</td>
            <td>{car.an}</td>
        </tr>
    )
}