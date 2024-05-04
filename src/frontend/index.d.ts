export interface backendAPI {
    call: Function
}

declare global {
    interface Window {
        backend: backendAPI
    }
}