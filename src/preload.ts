// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import {contextBridge, ipcRenderer} from 'electron/renderer'

contextBridge.exposeInMainWorld('backend',{
    call: (method:string, ...params: any[]) => ipcRenderer.invoke(method, ...params),
})