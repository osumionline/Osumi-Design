import { DesignComponentInterface } from '../interfaces/interfaces';

export default class OCardContent implements DesignComponentInterface {
  public tag: string = 'o-card-content';
  public name: string = 'OcardContent';
  public title: string = 'Componente de cuerpo en OCard';
  public description: string =
    'Este componente crea un contenedor para el cuerpo del componente OCard.';
  public children: DesignComponentInterface[] = [];

  visible: boolean = false;
}
