import { useState } from "react"

const MyForm = () =>{
    const [name, setName] = useState()
    const [deadline, setDeadline] = useState()

    function  submitHandler(){
        const zadanie = {
            name: name,
            deadline: deadline
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <input type="text" placeholder="nazwa zadania" value={name} onChange={onChangeName}/>
            <input type="date" placeholder="deadline" value={deadline} onChange={e => setDeadline(e.target.value)}/>
        </form>
    )   
}

export default MyForm