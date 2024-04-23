import { DataSource } from "typeorm"
import { Medic } from "../domain/Medic"
import { app } from 'electron'
import * as path from 'path'

export const useSQLite = async (dbPath: string = '') => {
    const databasePath = path.join(app.getPath('userData'), 'source', dbPath)
    return await (new DataSource({
        type: 'better-sqlite3',
        database: databasePath,
        synchronize: true,
        entities: [Medic]
    })).initialize()
}