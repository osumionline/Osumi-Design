import { DesignComponentInterface } from '../interfaces/interfaces';

export default class OCardHeader implements DesignComponentInterface {
  public tag: string = 'o-card-header';
  public name: string = 'OCardHeader';
  public title: string = 'Componente de cabeceras en OCard';
  public description: string =
    'Este componente crea una cabecera para el componente OCard.';
  public children: DesignComponentInterface[] = [];

  visible: boolean = false;
}
