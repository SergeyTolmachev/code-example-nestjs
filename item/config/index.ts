import * as dotenv from 'dotenv';

dotenv.config({ path: 'item.env' });

const {
    NODE_ENV,
    PORT,
    HOST,
} = process.env;

export const appConfig = {
    port: Number(PORT || 5000),
    host: HOST || '0.0.0.0',
    callbackUrl: `${HOST}:${PORT}/item/confirm`,
};
