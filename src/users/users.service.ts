import { Injectable } from '@nestjs/common';
import { NumericLiteral } from 'typescript';

@Injectable()
export class UsersService {

  private usuarios = []

  listar() {
    return this.usuarios
  }

  buscar(id: number) {
    return this.usuarios[id]
  }

  criar(nome: string, idade: number) {
    return this.usuarios.push({nome, idade})
  }

  atualizar(id: number, dados: any) {
    return this.usuarios[id] = dados
  }

  deletar(id: number) {
    return this.usuarios.splice(id, 1)
  }

}