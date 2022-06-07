import { Controller } from "@nestjs/common";
import { BaseController } from "src/commons/controller.commons";
import { BaseService } from "src/commons/service.commons";
import { Ropa } from "../entities/ropa.entity";
import { RopaService } from "../servics/ropa.service";
@Controller('api/ropa')
export class RopaController extends BaseController<Ropa>{
    constructor(private readonly ropaService: RopaService){
        super();
    }

    getService(): BaseService<Ropa> {
        return this.ropaService;
    }
}