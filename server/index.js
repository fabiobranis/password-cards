/* eslint-disable no-console */
import { SERVER_PORT } from './constants.js';
import app from './app.js';

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}`);
});
