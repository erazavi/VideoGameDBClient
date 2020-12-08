import {audience, clientId, domain} from '../app/auth_config.json';

export const environment = {
  production: true,
  auth: {
    domain,
    clientId,
    redirectUri: window.location.origin,
    audience,
  }
};
