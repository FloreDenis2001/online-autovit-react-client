import { getValue } from '@testing-library/user-event/dist/utils';
import { Result } from 'antd';
import React, { useState, useEffect, useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Masina from "../../models/Masina"
import ServiceCar from "../../services/Api"
import { Alert } from 'antd';
import { successNotification,errorNotification } from '../Notifications/notifications';


const UpdateCar = () => {

    let serviceCar = new ServiceCar();

    const [marca, setMarca] = useState("");
    const [culoare, setCuloare] = useState("");
    const [anul, setAnul] = useState(1864);
    const [model,setModel]=useState("");

    let { id } = useParams();

    let navigate = useNavigate();
    const [car, setCar] = useState(Object);

   let [errors,setErrors]=useState([""]);

    useEffect(() => {


        findById();

    }, []);


    let checkErros = () => {

        let messages = [];
        setErrors([]);

        if (marca ==="") {
            messages.push("Trebuie sa introduceti marca");
        }
        if (anul === 0) {
            messages.push("Anul trebuie sa fie mai mare decat 1854");
        } 
         if (culoare === "") {
            messages.push("Trebuie sa introduceti culoarea");
        }

        setErrors(messages);
    }

    useEffect(() => {
        checkErros();

        

        setCar({
            id: id,
            marca: marca !== '' ? marca : undefined,
            culoare: culoare !== '' ? culoare : undefined,
            an: anul !== 0 ? anul : undefined,
            model:model
        });
        
        console.table(car);


    }, [marca, culoare, anul]);



    let updateCar = async () => {
        checkErros();

        if(errors.length==0){
        await serviceCar.updateCar(car);
        setTimeout(() => {
            navigate("/");
        }, 2500)

        successNotification("Updated","masina","topRight");
        }else {
            errors.forEach((err)=>{
                errorNotification(err,"erroare","topRight");
            })
        }
    }

    let deleteCar = async () => {

        let res = await serviceCar.deleteCar(car);
        if (res != null) {
        }

        setTimeout(() => {
            navigate("/");
        }, 2500)

    }

    let findById = async () => {

        if (id) {
           
            try{

                let findByIdCar = await serviceCar.findCarById(id);
                console.log(findByIdCar)
                setAnul(findByIdCar!.an);
                setCuloare(findByIdCar!.culoare);
                setMarca(findByIdCar!.marca);
                setModel(findByIdCar!.model);
    

            }catch(eroare){
            
                const message = (eroare as Error).message;
                errorNotification(message,message,"bottomLeft");

                           
            }


        }


    }

    let goHome = (): void => {
        navigate("/");
    }

    return (
        <>
            <h1>Update Car</h1>
            <form>
                <p>
                    <label htmlFor="marca">Marca</label>
                    <input name="marca" type="text" id="marca" value={marca} onChange={(e) => {
                        e.preventDefault();
                        setMarca(e.target.value);
                    }

                    } />
                </p>
                <p>
                    <label htmlFor="color">Culoare</label>
                    <input name="color" type="text" id="color" value={culoare} onChange={(e) => {
                         e.preventDefault();
                        setCuloare(e.target.value);
                    }

                    } />
                </p>
                <p>
                    <label htmlFor="year">Anul</label>
                    <input name="year" type="text" id="year" value={anul} onChange={(e) => {
                         e.preventDefault();
                         setAnul(+e.target.value);
                    }

                    } />
                </p>
                <p>
                    <input type="button" value="Update Car" onClick={updateCar} />
                </p>
            </form>

            <p>
                <a className="button" onClick={goHome}>Cancel</a>
            </p>
            <p><input type="button" value="Delete Car" onClick={deleteCar} /></p>



        </>
    )
}

export default UpdateCar;