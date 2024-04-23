import 'reflect-metadata';

import { useSQLite } from './infrastructure/DataSource'
import { DataSource } from 'typeorm';
import { MedicCrud } from './application/MedicCrud';

export class Backend {
    private static instance: Backend|null
    private database: DataSource|null

    constructor(){}

    private static async create(datasource: string = 'sqlite') {
        const i = new Backend();
        if (datasource == 'sqlite') {
            i.database = await useSQLite('tea.db')
        }
        return i;
    }
    
    public static async getInstance(): Promise<Backend> {
        if (!Backend.instance) {
            Backend.instance = await Backend.create()
        }
        return Backend.instance
    }


    public getMedicController(): MedicCrud
    {
        return new MedicCrud(this.database)
    }
}