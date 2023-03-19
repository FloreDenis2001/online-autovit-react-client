
import React, { useEffect, useState } from 'react';
import Masina from '../../models/Masina';
import ServiceCar from "../../services/Api";
import { Car } from './Car/Car';

const Home: React.FC = () => {


    let [cars,setCars]=useState(Array<Masina>);

    useEffect(() => {
        getAllCars();
    }, []);

    let serviceCar = new ServiceCar();

    let getAllCars = async (): Promise<void> => {

        let data = await serviceCar.getAllCars();


        setCars(data);
    }


    return (
        <>
            <h1>Cars</h1>
            <p><a>Cars</a></p>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Marca</th>
                        <th>Model</th>
                        <th>Culoare</th>
                        <th>Anul</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cars.map(car=>{
                            return <Car car={car}/>
                        })
                    }
                </tbody>
            </table>
        </>
    )
}


export default Home;