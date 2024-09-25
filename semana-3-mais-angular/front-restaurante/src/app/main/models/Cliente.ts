export interface Cliente {
  id?: number;
  restauranteId: number,
  nome: string,
  sobrenome: string,
  cpf: string,
  dataNascimento: Date,
  sexoEnum: number,
  telefone: string
}
