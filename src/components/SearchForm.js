import {useState} from 'react'


export function SearchForm(props){


    const [title, settitle] = useState("")

    const onSubmit = (e) => {
   e.preventDefault()
    }

    return <form>
        <label>
            Search by Title:
            <input type="text" value={title} onChange={(e) => settitle(e.target.value)} placeholder="Avengers etc"/>
        </label>
        <input type="submit" value="Search for a Movie" />
        </form>
}