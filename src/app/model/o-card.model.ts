import { DesignComponentInterface } from '../interfaces/interfaces';
import OCardContent from './o-card-content.model';
import OCardFooter from './o-card-footer.model';
import OCardHeader from './o-card-header.model';

export default class OCard implements DesignComponentInterface {
  public tag: string = 'o-card';
  public name: string = 'OCard';
  public title: string = 'Componente de contenedor personalizado';
  public description: string =
    'Este componente crea un contenedor para textos, fotos o acciones.';
  public children: DesignComponentInterface[] = [
    new OCardHeader(),
    new OCardContent(),
    new OCardFooter(),
  ];
}
