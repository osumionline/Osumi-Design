import { DesignComponentInterface } from '../interfaces/interfaces';

export default class OButtonLink implements DesignComponentInterface {
  public tag: string = 'o-button-link';
  public name: string = 'OButtonLink';
  public title: string = 'Componente de enlace personalizado como un botón';
  public description: string =
    'Este componente crea un enlace con aspecto de botón estilizado que puede contener contenido personalizado.';
  public children: DesignComponentInterface[] = [];

  visible: boolean = false;
}
