import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RopaModule } from './ropa/servics/ropa.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host:'ba8ebimqysxe4cawaakt-postgresql.services.clever-cloud.com',
      port:5432,
      username:'u1eyupo4f38xe5sc8f5q',
      password:'Ac4gdQGGnUboh8bHErAS',
      database:'ba8ebimqysxe4cawaakt',
      autoLoadEntities:true

    }),
    RopaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
