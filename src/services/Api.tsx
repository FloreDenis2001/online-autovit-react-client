
import Masina from "../models/Masina";


 class ServiceCar {
  api<U>(path: string, method:string, body: U, token: string): Promise<Response> {
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

  getAllCars=async():Promise<Masina[]>=>{
        let data=await this.api<null>("/masini/all","GET",null,"");
        if(data.status==200){
          let cars=data.json() as unknown as Masina[];
          return cars;
        }else{
          return Promise.reject([]);
        }
    

  }
}



export default ServiceCar;