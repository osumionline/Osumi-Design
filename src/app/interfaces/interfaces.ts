export interface DesignComponentInterface {
  tag: string;
  name: string;
  title: string;
  description: string;
  children: DesignComponentInterface[];
  visible?: boolean;
}
