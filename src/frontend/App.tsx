import { useState } from "react"

export const App = () => {

    const [medics, setMedics] = useState([]);
    
    const invokeCreateMedic = async () => {
        console.log('Invoking create medic')
        const value = await window.backend.call('medic:create','Gonzalo','Bertomeu')
        console.log(value)
    }

    const invokeListMedic = async () => {
        console.log('Invoking create medic')
        const values = await window.backend.call('medic:list')
        setMedics(values)
    }
    return (
        <div>
            <h1>Main App</h1>
            <button onClick={invokeCreateMedic}>
                Create Medic
            </button>
            <button onClick={invokeListMedic}>
                List Medic
            </button>

            <ul>
                {
                    medics.length &&
                    medics.map((medic) => {
                        return (
                            <li>{medic.firstName} {medic.lastName}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}