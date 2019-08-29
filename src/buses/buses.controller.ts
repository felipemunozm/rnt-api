import { Controller, Get, Param } from '@nestjs/common';
import { PersonaBusesResponse } from 'src/buses/interfaces/PersonaBusesResponse.interface';
import { BusesService } from './buses.service';
import { ServicioResponse } from 'src/buses/interfaces/ServicioResponse.interface';

@Controller('buses')
export class BusesController {
    constructor(private readonly busesService: BusesService) {}

    @Get("personas/:RUT_SOLICITANTE")
    async getPersonaSolicitante(@Param("RUT_SOLICITANTE") rut: number) : Promise<ServicioResponse[]> {
        return this.busesService.findServiciosByRut(rut);
    }
}
