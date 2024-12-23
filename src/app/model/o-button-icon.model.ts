import { DesignComponentInterface } from '../interfaces/interfaces';

export default class OButtonIcon implements DesignComponentInterface {
  public tag: string = 'o-button-icon';
  public name: string = 'OButtonIcon';
  public title: string =
    'Componente de enlace personalizado como un botón con icono';
  public description: string =
    'Este componente crea un enlace con aspecto de botón estilizado que contiene un icono.';
  public children: DesignComponentInterface[] = [];

  visible: boolean = false;
}
