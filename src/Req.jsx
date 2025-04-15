import { useEffect, useState } from 'react'
import style from './Req.module.css'
import { api } from './api/api'
export default function Req(){
    const [data, setData] = useState([])

    useEffect(() => {
        api.get(`/character`).then((response) => {
            setData(response.data.results)
        }).catch((error) => {
            console.log(error)
        })
    }, [])
    console.log(data)
    return(
        <section className={style.wrapPage}>
            <h1>Rick and Morty API</h1>
            {data.map((item, index) =>{
                return(
                    <div key={index}>
                        <h5>{item.name}</h5>
                        <img src={item.image} alt={item.name} />
                    </div>
                )
            })}
        </section>
    )
}