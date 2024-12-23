import { DesignComponentInterface } from '../interfaces/interfaces';

export default class OHeader implements DesignComponentInterface {
  public tag: string = 'o-header';
  public name: string = 'OHeader';
  public title: string = 'Componente para crear cabeceras';
  public description: string =
    'Este componente crea una cabecera para ser usado en cualquier parte.';
  public children: DesignComponentInterface[] = [];
}
