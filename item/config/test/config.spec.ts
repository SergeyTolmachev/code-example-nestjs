import * as dotenv from 'dotenv';
import * as config from '../index';

const { RUN_ENV } = process.env;

if (RUN_ENV === 'development') {
    dotenv.config({ path: 'item.env' });
}

describe('API Config', () => {
    it('appConfig', () => {
        const {
            PORT,
            HOST,
        } = process.env;
        const { appConfig } = config;

        expect(typeof appConfig.port).toBe('number');
        expect(appConfig.port).toBe(Number(PORT));
        expect(typeof appConfig.host).toBe('string');
        expect(appConfig.host).toBe(HOST);
    });
});
