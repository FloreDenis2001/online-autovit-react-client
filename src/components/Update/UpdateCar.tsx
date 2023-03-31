import { getValue } from '@testing-library/user-event/dist/utils';
import { Result } from 'antd';
import React, { useState, useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom';
import Masina from "../../models/Masina"
import ServiceCar from "../../services/Api"


const UpdateCar = () => {

    let serviceCar = new ServiceCar();

    const [marca, setMarca] = useState("");
    const [culoare, setCuloare] = useState("");
    const [anul, setAnul] = useState(0);
    let { id } = useParams();


    const [car, setCar] = useState(Object);



    useEffect(() => {


        findById();

    }, []);




    useEffect(() => {
        let masina = {
            id: car.id,
            an: anul,
            culoare: culoare,
            marca: marca,
            model: car.model
        } as Masina;

        setCar(masina);
        console.table(car);


    }, [marca, culoare, anul]);


    let updateCar = async () => {
        let response = await serviceCar.updateCar(car);
        console.log(response);
    }

    let deleteCar = async () => {
        let res = await serviceCar.deleteCar(car);
        console.log(res);
    }

    let findById = async () => {

        if (id) {
            let findByIdCar = await serviceCar.findCarById(id);
            console.log(findByIdCar);
            setCar(findByIdCar);
        }

    }

    return (
        <>
            <h1>Update Car</h1>
            <form>
                <p>
                    <label htmlFor="marca">Marca</label>
                    <input name="marca" type="text" id="marca" value={marca} onChange={(e) => {
                        setMarca(e.target.value);
                    }

                    } />
                </p>
                <p>
                    <label htmlFor="color">Culoare</label>
                    <input name="color" type="text" id="color" value={culoare} onChange={(e) => {
                        setCuloare(e.target.value);
                    }

                    } />
                </p>
                <p>
                    <label htmlFor="year">Anul</label>
                    <input name="year" type="text" id="year" value={anul} onChange={(e) => {
                        setAnul(+e.target.value);
                    }

                    } />
                </p>
                <p>
                    <input type="button" value="Update Car" onClick={updateCar} />
                </p>
            </form>

            <p>
                <a className="button">Cancel</a>
            </p>
            <p><input type="button" value="Delete Car" onClick={deleteCar} /></p>


        </>
    )
}

export default UpdateCar;