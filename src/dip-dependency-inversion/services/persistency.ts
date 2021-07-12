import { PersistencyProtocol } from '../classes/interfaces/interfaces/persistency-protocol';

export class Persistency implements PersistencyProtocol {
  saveOrder(): void {
    console.log('Pedido salvo com sucesso');
  }
}
