import { DesignComponentInterface } from '../interfaces/interfaces';

export default class OListItem implements DesignComponentInterface {
  public tag: string = 'o-list-item';
  public name: string = 'OListItem';
  public title: string = 'Componente para elementos en listados OList';
  public description: string =
    'Este componente crea un elemento de lista para listado OList.';
  public children: DesignComponentInterface[] = [];

  visible: boolean = false;
}
