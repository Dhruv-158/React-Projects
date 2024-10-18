
// eslint-disable-next-line no-unused-vars
import React ,{useState , useEffect}from 'react'
import { useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'

export default function Protected({Children , authentication = true}) {
    
    const navigate =useNavigate()
    const [Loader , setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)

    useEffect( () => {

        if(authentication && authStatus !== authentication ){
            navigate("/login")
        }else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
        setLoader(false)
    },[authStatus,navigate, authentication])

    return (
        <div>AuthLayout</div>
    )
}

