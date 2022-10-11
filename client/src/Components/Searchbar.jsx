import { useSelector,useDispatch } from "react-redux"
import React, {useState} from "react"
import {searchCountr} from "../Redux/Actions.js"
import { Link } from "react-router-dom"

export default function SearchBar(){
    
    const countries = useSelector((state)=>state.filtro)
    const[search, setSearch] = useState('') 
    const dispatch =useDispatch()
    
    const handleInputChange= function  (e){
        setSearch(e.target.value);   
        if(search){
            dispatch(searchCountr(search))
        }
    }  
    return(
        <div className="searchbardiv">
            
            <input 
            type='text' 
            name='name'
            placeholder="Pais " 
            onChange={handleInputChange}
            value={search}
            className="input"
            ></input>          
            <div className="lista">
                {search && countries.slice(0,10).map((e)=>{
                    
                    return(
                        <div key={e.id}>
                            <Link to={`/countries/${e.id}`} className='link' >{e.name}</Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}