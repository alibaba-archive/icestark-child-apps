import ReactDOM from 'react-dom';
import { isInIcestark, getMountNode, registerAppEnter, registerAppLeave } from '@ice/stark-app';

import router from './router';

const mountNode = getMountNode();

// make sure the unmount event is triggered
if (isInIcestark()) {
  registerAppEnter(() => {
    console.log('child-seller-react-16 ---------> mount');
    ReactDOM.render(router(), mountNode);
  });

  ReactDOM.render(router(), mountNode);

  registerAppLeave(() => {
    ReactDOM.unmountComponentAtNode(mountNode);
  });
} else {
  console.log('child-seller-react-16 ---------> single mount');
  ReactDOM.render(router(), mountNode);
}
