import { useContext, createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getData } from "./Api";
import { adminData } from "./Db";
export const userRecord = {
    name: "",
    username: "",
    email: "",
    adstreet: "",
    adsuite: "",
    adcity: "",
    adzipcode: "",
    geolat: "",
    geolng: " ",
    phone: "",
    website: "",
    comname: "",
    comcatchPhrase: "",
    comBs: "",
}
const flowDat = createContext();
export const GobalContext = () => {
    return useContext(flowDat);
}
export const UsersWrapperList = ({ children }) => {

    const [users, setUsers] = useState([]);
    useEffect(() => { getData(setUsers) }, []);
    const [isLog, setIslog] = useState(false);
    const navigate = useNavigate()

    const handleLogin = (reDir) => {
        navigate(`/${reDir}`);
        setIslog(false);
    }
    const dataFall = {
        users,
        setUsers,
        adminData,
        isLog,
        setIslog,
        handleLogin
    }
    return (
        <flowDat.Provider value={dataFall}>
            {children}
        </flowDat.Provider>
    )
}

