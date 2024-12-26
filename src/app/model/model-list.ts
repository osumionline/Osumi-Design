import { DesignComponentInterface } from '../interfaces/interfaces';
import OBadge from './o-badge.model';
import OButton from './o-button.model';
import OCard from './o-card.model';
import OHeader from './o-header.model';
import OIcon from './o-icon.model';
import OList from './o-list.model';
import OLoading from './o-loading.model';
import OTabs from './o-tabs.model';

const modelList: DesignComponentInterface[] = [
  new OBadge(),
  new OButton(),
  new OCard(),
  new OHeader(),
  new OIcon(),
  new OList(),
  new OLoading(),
  new OTabs(),
];
export default modelList;
