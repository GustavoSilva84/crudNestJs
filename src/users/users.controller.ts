import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { JsonWebKeyInput } from 'crypto';
import path from 'path/posix';
import { JsonObjectExpressionStatement } from 'typescript';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

  constructor(private UsersService: UsersService) {}
  
  @Get() 
  findAll() {
    return this.UsersService.listar()
  }

  @Get('/:id') 
  findOne(@Param() parms){
    return this.UsersService.buscar(parms.id);
  }

  @Post()
  create(@Body() data) {
    let id = this.UsersService.criar(data.nome, data.idade);
    return this.UsersService.buscar(--id);
  }

  @Put('/:id')
  update(@Param() param, @Body() body) {
    return this.UsersService.atualizar(--param.id, body)
  }
  
}


