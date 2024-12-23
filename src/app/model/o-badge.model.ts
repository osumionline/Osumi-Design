import { DesignComponentInterface } from '../interfaces/interfaces';

export default class OBadge implements DesignComponentInterface {
  public tag: string = 'o-badge';
  public name: string = 'OBadge';
  public title: string = 'Directiva para mostrar contador de notificaciones';
  public description: string =
    'Esta directiva permite añadir un indicador de aviso con un número de notificaciones.';
  public children: DesignComponentInterface[] = [];
}
