import { DataSource, Repository } from 'typeorm'

import { Medic } from '../domain/Medic'

export class MedicCrud {
    private repository: Repository<Medic>
    constructor(database: DataSource) {
        this.repository = database.getRepository(Medic)
    }

    public async create(firstName: string, lastName: string): Promise<Medic>
    {
        const medic = new Medic()
        medic.firstName = firstName
        medic.lastName = lastName
        return this.repository.save(medic)
    }

    public async list(): Promise<Medic[]> 
    {
        return this.repository.find()
    }
}