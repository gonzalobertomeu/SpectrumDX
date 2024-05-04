import { IpcMainInvokeEvent, ipcMain } from 'electron'

export class Router
{
    public static instance: Router|null = null;
    

    public static getInstance() {
        if (Router.instance == null) {
            Router.instance = new Router();
        }
        return Router.instance
    }

    public register(route: string, callback: Function) {
        ipcMain.handle(route, async (event, ...args) => {
            return await callback(...args)
        })
    } 
}