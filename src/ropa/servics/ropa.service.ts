import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "src/commons/service.commons";
import { Repository } from "typeorm";
import { Ropa } from "../entities/ropa.entity";

@Injectable()
export class RopaService extends BaseService<Ropa>{
constructor(@InjectRepository(Ropa) private ropaRepo:Repository<Ropa>){
    super();
}

    getRepository(): Repository<Ropa> {
        return this.ropaRepo;
    }
}