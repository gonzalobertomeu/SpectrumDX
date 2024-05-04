import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { useSQLite } from './infrastructure/DataSource';
import { MedicRoutes } from './medics/Medic.routes';

export class Backend {

    private db: DataSource

    public static async create(): Promise<Backend>
    {
        const instance = new Backend()
        instance.db = await useSQLite('tea.db')
        return instance
    }

    public main() {
        console.log('Main loaded')
        const medicRoutes = new MedicRoutes(this.db)
        medicRoutes.init()
    }
}