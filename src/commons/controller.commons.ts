import { Repository } from "typeorm";
import { Body, Get, HttpCode, HttpStatus, Param, Post, UseGuards } from "@nestjs/common";
import { BaseService } from "./service.commons";



export abstract class BaseController<T>{
    abstract getService(): BaseService<T>;

    @Get('all')
    async findAll(): Promise<T[]> {
        return this.getService().findAll();
    }
    @Get('find/:id')
    async findOne(@Param('id')id): Promise<T> {
        return await this.getService().findOne(id);
    }

    @Post('create')
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() entity: T): Promise<T> {
        return await this.getService().create(entity);
        
    }

    @Post('delete/:id')
    @HttpCode(HttpStatus.OK)
    async delete(@Param('id')id:any ) {
        await this.getService().delete(id);
    }

    @Get('count')
    async count():Promise<number>{
        return await this.getService().count();
    }
}