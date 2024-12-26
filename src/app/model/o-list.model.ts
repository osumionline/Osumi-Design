import { DesignComponentInterface } from '../interfaces/interfaces';

export default class OList implements DesignComponentInterface {
  public tag: string = 'o-list';
  public name: string = 'OList';
  public title: string = 'Componente para crear listados';
  public description: string =
    'Este componente crea un contenedor para crear listados.';
  public children: DesignComponentInterface[] = [];

  visible: boolean = false;
}
