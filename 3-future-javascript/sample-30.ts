// Converting callback functions to promise

import fs from 'fs';
import util from 'util';

// This
const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

// Or this
const readFile = util.promisify(fs.readFile);
