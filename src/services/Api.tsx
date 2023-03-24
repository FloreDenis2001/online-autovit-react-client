
import HttpResponse from "../models/HttpResponse";
import Masina from "../models/Masina";


class ServiceCar {

  api<U>(path: string, method: string, body: U, token: string): Promise<Response> {
    const url = "http://localhost:8080/api/v1" + path;
    const options: RequestInit = {
      method,
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authentification: `Bearer${token}`,
      },
      body: body == null ? null : JSON.stringify(body),
    };

    return fetch(url, options);
  }

  getAllCars = async (): Promise<Masina[]> => {
    let data = await this.api<null>("/masini/all", "GET", null, "");
    if (data.status == 200) {
      let cars = await data.json();
      return cars;
    } else {
      return Promise.reject([]);
    }


  }


  addCar = async (masina: Masina) => {
    let data = await this.api<Masina>("/masini/add", "POST", masina, "");

    try {
      if (data.status === 201) {
        let car = await data.json();
        let response: HttpResponse<Masina> = {
          data: car,
          message: data.statusText,
          ...data
        }
        console.log(data.statusText);
        return response
      }

      throw new Error(data.statusText);

    } catch (err) {
      let response: HttpResponse<Masina> = {
        data: null,
        message:data.statusText,
        ...data
      }
   
      return response
    }

  }

  updateCar= async(masina:Masina)=>{
     
    try{
      let data = await this.api<Masina>("/masini/update", "PUT", masina, "");
      if(data.status===200){
        let car = data.json();
        return car;
      }else {
        throw new Error(data.statusText);
      }
    }catch(e){
      throw new Error("Wrong fetch !");
    }

  }

}


export default ServiceCar;




