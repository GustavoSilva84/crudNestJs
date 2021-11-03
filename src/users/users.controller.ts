import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { UsersService } from './users.service';

interface usuarios {
  nome: string,
  idade: number
}

interface id {
  id: number
}

@Controller('users')
export class UsersController {

  constructor(private UsersService: UsersService) {}
  
  @Get() 
  findAll() {
    return this.UsersService.listar();
  }
  
  @Get('/:id') 
  findOne(@Param() param: id) {
    return this.UsersService.buscar(param.id);
  }

  @Post()
  create(@Body() data: usuarios) {
    let id = this.UsersService.criar(data.nome, data.idade);
    return this.UsersService.buscar(--id);
  }

  @Put('/:id')
  update(@Param() param: id, @Body() data: usuarios) {
    return this.UsersService.atualizar(--param.id, data);
  }

  @Delete('/:id')
  delete(@Param() param: id) {
    return this.UsersService.deletar(param.id);
  } 

}


