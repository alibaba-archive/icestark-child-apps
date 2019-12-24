import ReactDOM from 'react-dom';
import { isInIcestark, getMountNode, registerAppEnter, registerAppLeave } from '@ice/stark-app';

import router from './router';

const mountNode = getMountNode();

if (isInIcestark()) {
  registerAppEnter(() => {
    console.log('child-common-react-15 ---------> mount');
    ReactDOM.render(router(), mountNode);
  });

  registerAppLeave(() => {
    ReactDOM.unmountComponentAtNode(mountNode);
  });
} else {
  console.log('child-common-react-15 ---------> single mount');
  ReactDOM.render(router(), mountNode);
}


