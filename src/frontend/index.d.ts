export interface backendAPI {
    createMedic: Function
    listMedic: Function
}

declare global {
    interface Window {
        backend: backendAPI
    }
}