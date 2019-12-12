import mongoose from 'mongoose';
import dg from 'debug';

import { getDbName, getDbUrl, getDbPort } from '../helpers';

const debug = dg('db');
const DB_NAME = getDbName();
const DB_URL = getDbUrl();
const DB_PORT = getDbPort();

const mongooseOptions = {
    promiseLibrary: global.Promise,
    poolSize: 10,
    keepAlive: 30000,
    connectTimeoutMS: 5000,
    reconnectTries: Number.MAX_SAFE_INTEGER,
    reconnectInterval: 5000,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
};

// mongodb://username:password@localhost:27017/users
const connection = mongoose.connect(`mongodb://${DB_URL}:${DB_PORT}/${DB_NAME}`, mongooseOptions);

connection
    .then(() => {
        debug(`DB '${DB_NAME}' connected`);
    })
    .catch(({ message }) => {
        debug(`DB ${DB_NAME} connectionError: ${message}`);
    });
