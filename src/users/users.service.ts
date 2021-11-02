import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

  private usuarios = [
    {
      'nome': 'Gustavo',
      'idade': 16
    },
    {
      'nome': 'Gustavo',
      'idade': 16
    },
    {
      'nome': 'Gustavo',
      'idade': 16
    },
    {
      'nome': 'Gustavo',
      'idade': 16
    }
  ]

  listar() {
    return this.usuarios
  }

  buscar(id: any) {
    return this.usuarios[id]
  }

  criar(nome, idade) {
    return this.usuarios.push({nome, idade})
  }

  atualizar(id, dados) {
    return this.usuarios[id] = dados
  }

}
