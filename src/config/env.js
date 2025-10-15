// src/config/env.js
import dotenv from 'dotenv';
dotenv.config();

const selectedEnv = process.env.TEST_ENV || 'dev';

let config;

switch (selectedEnv) {
  case 'qa':
    config = await import('./qa.config.js');
    break;
  case 'staging':
    config = await import('./staging.config.js');
    break;
  case 'prod':
    config = await import('./prod.config.js');
    break;
  default:
    config = await import('./dev.config.js');
    break;
}

console.log('🧩 [ENVIRONMENT LOADED]');
console.log(`Environment: ${selectedEnv}`);
console.log(`Base URL: ${config.default.baseURL}`);
console.log(`UI Timeout: ${config.default.uiTimeout} ms`);

export default config.default;
