import { DesignComponentInterface } from '../interfaces/interfaces';

export default class OLoading implements DesignComponentInterface {
  public tag: string = 'o-loading';
  public name: string = 'OLoading';
  public title: string = 'Componente de indicador de carga';
  public description: string =
    'Este componente crea un pequeño icono animado para indicar que hay un trabajo en progreso.';
  public children: DesignComponentInterface[] = [];
}
