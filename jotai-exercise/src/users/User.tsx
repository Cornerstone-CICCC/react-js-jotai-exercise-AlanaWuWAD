import { useAtom } from "jotai"
import { firstnameAtom, lastnameAtom, ageAtom, hobbiesAtom } from "../atoms/use.atom"
import { useState, type FormEvent } from "react"

const User = () => {
    const [fistname, setFirstname] = useAtom(firstnameAtom)
    const [lastname, setLastname] = useAtom(lastnameAtom)
    const [age, setAge] = useAtom(ageAtom)
    const [hobbies, setHobbies] = useAtom(hobbiesAtom)
    const [checkedHobbies, setCheckedHobbies] = useState<string[]>([])
    const [submited, setSubmited] = useState<boolean>(false)

    const handleSubmit = (e:FormEvent)=> {
        e.preventDefault()
        setSubmited(true)
    }
    const handleCheckboxChange = (hobby: string) => {
        setCheckedHobbies( prev => 
            prev.includes(hobby)
            ? prev.filter(h => h !== hobby)
            : [...prev,hobby]
        )
    }

    return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={fistname} onChange={ e => setFirstname(e.target.value)} placeholder="First name" />
            <input type="text" value={lastname} onChange={e => setLastname(e.target.value)} placeholder="Last name" />
            <input type="number" value={age} onChange={e => setAge(Number(e.target.value))
            } placeholder="Age" />
                 <ul>{hobbies.map((hobby,i) => (
                <li key={i}>
                    <label>
                        <input 
                        type="checkbox" 
                        checked={checkedHobbies.includes(hobby)}
                        onChange={()=> handleCheckboxChange(hobby)}
                        />{hobby}
                    </label>
                </li>
        ))}</ul>
            <button>Submit</button>
        </form>
   
        {submited && 
        <fieldset>
           <p> Name: {fistname} {lastname} </p>
           <p>Age: {age}</p>
           <p>Hobbies: {checkedHobbies.join(',')}</p>
        </fieldset>
        }
    </div>
  )
}

export default User