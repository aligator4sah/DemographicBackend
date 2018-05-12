import { createConnection} from "typeorm";
import {async} from "rxjs/scheduler/async";

export const databaseProvider = [
    {
        provide: 'DbConnectionToken',
        useFactory: async() => await createConnection({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: '12345',
            database: 'demo',
            entities: [
                __dirname + '/../**/*.entity{.ts,.js}',
            ],
            logging: true,
            synchronize: true,
        }),
    }
];