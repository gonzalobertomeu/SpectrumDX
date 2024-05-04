import { DataSource } from "typeorm"
import { app } from 'electron'
import * as path from 'path'
import { entities } from "../domain/Entities"

export const useSQLite = async (dbPath: string = ''): Promise<DataSource> => {
    const databasePath = path.join(app.getPath('userData'), 'source', dbPath)
    console.log(databasePath + ': is the path of DB')
    return await (new DataSource({
        type: 'better-sqlite3',
        database: databasePath,
        entities: entities
    })).initialize()
}