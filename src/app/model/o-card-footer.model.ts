import { DesignComponentInterface } from '../interfaces/interfaces';

export default class OCardFooter implements DesignComponentInterface {
  public tag: string = 'o-card-footer';
  public name: string = 'OCardFooter';
  public title: string = 'Componente de pie en OCard';
  public description: string =
    'Este componente crea un pie para el componente OCard.';
  public children: DesignComponentInterface[] = [];

  visible: boolean = false;
}
