import fetch from 'isomorphic-fetch';
import { getAccessToken } from '../account';

const BASE_URL = 'https://api.example.com/v1/'

const insightMetrics = (options) => {
  const {id, metrics, timeframe='last_7_days'} = options;

  return new Promise(
    (resolve, reject) => {
      setTimeout(
        () => resolve([
          options,
          {
            'views': 'Insight Views',
            'spend': 'Insight spend'
          }
        ])
      , 500)
    }
  );

  return fetch(BASE_URL + id + '/insights', {
    headers: {
      'Authorization': getAccessToken(),
      'Content-Type': 'application/json',
      'X-API-version': '2.3'
    },
    body: JSON.stringify(options)
  });
}

export default insightMetrics;
