import { DesignComponentInterface } from '../interfaces/interfaces';

export default class OButton implements DesignComponentInterface {
  public tag: string = 'o-button';
  public title: string = 'Componente de botón personalizado.';
  public description: string =
    'Este componente crea un botón estilizado que puede contener contenido personalizado.';
}
