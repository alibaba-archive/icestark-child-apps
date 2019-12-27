import ReactDOM from 'react-dom';
import { isInIcestark, getMountNode, registerAppEnter, registerAppLeave } from '@ice/stark-app';

import router from './router';

const mountNode = getMountNode();

// make sure the unmount event is triggered
if (isInIcestark()) {
  registerAppEnter(() => {
    console.log('child-seller-react-16 ---------> appEnter');
    ReactDOM.render(router(), mountNode);
  });

  registerAppLeave(() => {
    console.log('child-seller-react-16 ---------> appLeave');
    ReactDOM.unmountComponentAtNode(mountNode);
  });
} else {
  console.log('child-seller-react-16 ---------> single mount');
  ReactDOM.render(router(), mountNode);
}
