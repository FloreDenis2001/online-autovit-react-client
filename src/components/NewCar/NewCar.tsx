import React, { useEffect, useState } from 'react'
import Masina from "../../models/Masina"
import ServiceCar from "../../services/Api"

import { Alert, Space } from 'antd';

const NewCar: React.FC = () => {

    let serviceCar = new ServiceCar();
    const [marca, setMarca] = useState("");
    const [model, setModel] = useState("");
    const [culoare, setCuloare] = useState("");
    const [anul, setAnul] = useState(0);

    const [err, setErr] = useState(false);

    const [errMessage, setErrMessage] = useState("Eroareeee");




    const [car, setCar] = useState({
        an: 0,
        culoare: "",
        marca: "",
        model: ""
    } as Masina);


    let addCar = async () => {


        let response = await serviceCar.addCar(car);
        console.log(response);


    }



    useEffect(() => {

        let masina = {
            an: anul,
            culoare: culoare,
            marca: marca,
            model: model
        } as Masina;



        setCar(masina);
        console.table(car);


    }, [marca, model, culoare, anul]);

    let checkValid = () => {
        setErr(!(model !== "" && marca !== "" && culoare !== "" && anul !== 0));

    }

    return (

        <>
            <h1>New Car</h1>
            <form>
                <p>
                    <label htmlFor="Marca">Marca :</label>
                    <input name="marca" type="text" id="marca" value={marca} onChange={(e) => {
                        setMarca(e.target.value);
                    }} />
                </p>
                <p>
                    <label htmlFor="Model">Model : </label>
                    <input name="model" type="text" id="model" value={model} onChange={(e) => {
                        setModel(e.target.value);
                    }} />
                </p>
                <p>
                    <label htmlFor="Culoare">Culoare : </label>
                    <input name="culoare" type="text" id="culoare" value={culoare} onChange={(e) => {
                        setCuloare(e.target.value);
                    }} />
                </p>
                <p>
                    <label htmlFor="Anul">Anul : </label>
                    <input name="anul" type="number" id="Anul" value={anul} onChange={(e) => {
                        setAnul(+e.target.value);
                    }} />
                </p>

                <p>
                    <input type="button" value="Create New Car" onClick={addCar} />
                </p>
                <p>
                    <a className='button' href=''>Cancel</a>
                </p>
            </form>


            <div>
                {

                    err && <Alert message={errMessage} type="error" />

                }
            </div>

            <p> {"ceva " + err}</p>

        </>
    )
}

export default NewCar;