import { DesignComponentInterface } from '../interfaces/interfaces';

export default class OTabs implements DesignComponentInterface {
  public tag: string = 'o-tabs';
  public name: string = 'OTabs';
  public title: string =
    'Componente para agrupar contenido separado por pestañas';
  public description: string =
    'Este componente crea un sistema de contenido agrupado por pestañas.';
  public children: DesignComponentInterface[] = [];

  visible: boolean = false;
}
