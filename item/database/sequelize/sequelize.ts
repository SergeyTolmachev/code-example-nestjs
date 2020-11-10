import { Sequelize } from 'sequelize-typescript';
import { createNamespace } from 'cls-hooked';
import models from './models';

const namespace = createNamespace('sequelize-transaction');

// eslint-disable-next-line no-proto
(Sequelize as any).__proto__.useCLS(namespace);

const sequelize = new Sequelize({
    ...sequelizeConfig,
    dialect: 'mysql',
    dialectOptions: {
        dateStrings: true,
        decimalNumbers: true,
        timezone: '+03:00',
        typeCast: true,
    },
    timezone: '+03:00',
    models: Object.values(models),
    define: {
        charset: 'utf8',
        collate: 'utf8_general_ci',
    },
    logging: false,
});

export default sequelize;
