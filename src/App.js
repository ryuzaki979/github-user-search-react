import './App.css';
import SearchForm from './component/SearchForm';
import Header from './component/Header';
import DataDisplayer from './component/DataDisplayer';
import {useState,useEffect} from 'react';
import axios from 'axios'
function App() {
    const [user,setUser] = useState('')
    const [error,setError] = useState(false)
    const [isLoading,setIsLoading] = useState(false)

    useEffect ( ()=>{
      fetchUserData('octocat')
    },[])

    const handleSearch = (userName)=>{
        setIsLoading(true)
        setUser('')
        fetchUserData(userName)
        console.log(user)
    }

    const fetchUserData = (userName) =>{
      axios.get(`https://api.github.com/users/${userName}`)
            .then((res)=>{
              setIsLoading(false)
              setError(false)
              setUser(res.data)
            })
            .catch(()=>{
              setIsLoading(false)
              setError(true)
            })
    }

  return <>
    <Header/>

    <SearchForm handleSearch={handleSearch} hasError ={error} isLoading ={isLoading}/>

    <DataDisplayer userData= {user} hasError = {error} isLoading = {isLoading}/>
  </>
}

export default App;
