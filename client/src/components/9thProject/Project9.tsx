import React, { useEffect, useState } from 'react'
import Search from './search.png'

export default function Project9() {
    const [data, setData] = useState<any>([])
    const [search, setSearch] = useState<string>("")
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/lang/spanish')
        .then(res => res.json())
        .then(data => setData(data))
    },[])

    const searchName = (type, name) => {
        console.log(name)
        fetch(`https://restcountries.com/v3.1/${type}/${name}`)
        .then(res => res.json())
        .then(data => setData)
    }
  return (
    <div className='pr9-main-div'>
        <div className="pr9-nav">
            <h3>Where in the world ?</h3>
        </div>
        <div className="pr9-search">
            <div>
                <img src={Search} onClick={() => searchName("name",search)}/>
                <input type='text' value={search} onChange={(e)=>setSearch(e.target.value)} placeholder='Search for a country...'></input>
            </div>
            <select name="regions" id="reg">
                <option value="">Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
        <div className="pr9-results">
            {data.map(i=><div className='pr9-card'>
                <img src={`${i.flags.png}`} />
                <h5>{i.name.common}</h5>
                <h6><strong>Population:</strong>{i.population}</h6>
                <h6><strong>Region:</strong>{i.region}</h6>
                <h6><strong>Capital:</strong>{i.capital}</h6>
            </div>)}
        </div>
    </div>
  )
}
