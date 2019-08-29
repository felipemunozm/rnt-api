import { Injectable } from '@nestjs/common';
import { ServicioResponse } from 'src/buses/interfaces/ServicioResponse.interface';

@Injectable()
export class BusesService {
    private readonly lstServicioResponse: ServicioResponse[] = []
    create(servicioResponse: ServicioResponse) {
        this.lstServicioResponse.push(servicioResponse)
    }
    findAll(): ServicioResponse[] {
        return this.lstServicioResponse
    }

    findServiciosByRut(rut: number): ServicioResponse[] {
        let lst: ServicioResponse[] = new Array()
        let f: number = Math.floor(Math.random() * 10)
        lst.push({folio: 123,region: 2, tipoVehiculo: "BUS", tipoServicio: "URBANO", modalidad:"CORRIENTE"})
        return lst
    }
}
