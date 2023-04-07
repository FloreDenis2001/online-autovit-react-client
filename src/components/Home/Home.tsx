
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Masina from '../../models/Masina';
import ServiceCar from "../../services/Api";
import { Car } from './Car/Car';

const Home: React.FC = () => {


    let [cars,setCars]=useState(Array<Masina>);

    let navigate=useNavigate();

    useEffect(() => {
        getAllCars();
    }, []);

    let serviceCar = new ServiceCar();

    let getAllCars = async (): Promise<void> => {

        let data = await serviceCar.getAllCars();


        setCars(data);
    }

    let add=()=>{


         navigate("/add");
    }


    return (
        <>
            <h1>Cars</h1>
            <p><a>Cars</a></p>
            <table>
                <thead>
                    <tr>
                        <th>Marca</th>
                        <th>Model</th>
                        <th>Culoare</th>
                        <th>Anul</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cars.map(car=>{
                            return <Car car={car} key={car.id}/>
                        })
                        
                    }
                </tbody>
            </table>

            <button type='button' onClick={add}>Add Car</button>
        </>
    )
}


export default Home;