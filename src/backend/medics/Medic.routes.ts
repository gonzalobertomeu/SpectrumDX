import { DataSource } from "typeorm";
import { Router } from "../infrastructure/Router"
import { MedicController } from "./Medic.controller";

export class MedicRoutes {
    private ds: DataSource
    private router: Router
    constructor(datasource: DataSource) {
        this.ds = datasource
        this.router = Router.getInstance();
    }

    public init() {
        const controller = new MedicController(this.ds)
        this.router.register('medic:create', async (...args: any[]) => {
            return await controller.create(args[0],args[1]);
        })

        this.router.register('medic:list', async () => {
            return await controller.list();
        })
    }
}