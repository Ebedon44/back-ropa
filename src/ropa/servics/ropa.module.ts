import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RopaController } from "../controllers/persona.controller";
import { Ropa } from "../entities/ropa.entity";
import { RopaService } from "./ropa.service";


@Module({
    imports:[TypeOrmModule.forFeature([Ropa])],
    providers:[RopaService],
    controllers:[RopaController]

})

export class RopaModule{

}