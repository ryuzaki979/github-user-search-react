
import React, {useState}  from "react";
import searchIcon from '../assets/icon-search.svg'


const SearchForm = ({handleSearch,hasError,isLoading}) =>{
    const [value,setValue] = useState('')
    const handleSubmit =(e)=>{
        e.preventDefault()
        handleSearch(value)
        setValue('')
    }
    return <>
        <form action="#" className="container flex search card" onSubmit = {
                handleSubmit}>
            <img src={searchIcon} alt="" className="search__icon" />
            <input type="text" placeholder="Search GitHub UserName" className="search__input" 
            value = {value}
            onChange = {e=> setValue(e.target.value)}
            />
            {hasError && <span className="search__error">
                No Such Users
            </span>}
            <button className="search__submit" onSubmit = {
                handleSubmit
            }>
                {isLoading ? 'searching' : 'search'}
            </button>
        </form>
    </>
}


export default SearchForm