import { DesignComponentInterface } from '../interfaces/interfaces';

export default class OIcon implements DesignComponentInterface {
  public tag: string = 'o-icon';
  public name: string = 'OIcon';
  public title: string = 'Componente para cargar iconos';
  public description: string = 'Este componente carga y cachea iconos.';
  public children: DesignComponentInterface[] = [];
}
