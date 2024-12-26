import { DesignComponentInterface } from '../interfaces/interfaces';

export default class OCard implements DesignComponentInterface {
  public tag: string = 'o-card';
  public name: string = 'OCard';
  public title: string = 'Componente de contenedor personalizado';
  public description: string =
    'Este componente crea un contenedor para textos, fotos o acciones.';
  public children: DesignComponentInterface[] = [];

  visible: boolean = false;
}
