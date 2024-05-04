import { DataSource, Repository } from "typeorm";
import { Medic } from "../domain/Medic.entity";


export class MedicController {
    private repository: Repository<Medic>
    constructor(datasource: DataSource) {
        this.repository = datasource.getRepository(Medic)
    }

    public async create(firstName: string, lastName: string): Promise<Medic>
    {
        console.log('Create Medic')
        console.log(firstName,lastName)
        const medic = new Medic();
        medic.firstName = firstName
        medic.lastName = lastName
        return await this.repository.save(medic)
    }

    public async list(): Promise<Medic[]>
    {
        return await this.repository.find();
    }
}