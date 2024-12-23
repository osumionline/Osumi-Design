import { DesignComponentInterface } from '../interfaces/interfaces';
import OButtonIcon from './o-button-icon.model';
import OButtonLink from './o-button-link.model';

export default class OButton implements DesignComponentInterface {
  public tag: string = 'o-button';
  public name: string = 'OButton';
  public title: string = 'Componente de botón personalizado';
  public description: string =
    'Este componente crea un botón estilizado que puede contener contenido personalizado.';
  public children: DesignComponentInterface[] = [
    new OButtonLink(),
    new OButtonIcon(),
  ];
}
