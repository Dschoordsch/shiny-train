import LogRocket from 'logrocket';

import setupLogRocketReact from 'logrocket-react';

const logRocketAppId = process.env.REACT_APP_LOG_ROCKET_APP_ID;

if (logRocketAppId) {
  LogRocket.init(logRocketAppId);
  setupLogRocketReact(LogRocket);
}
