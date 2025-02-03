import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProviders";

const useMenu = () => {
       const [menu, setMenu] = useState([])
       const { loading, setLoading } = useContext(AuthContext)
       useEffect(() => {
              fetch('http://localhost:5000/menu')
                     .then(res => res.json())
                     .then(data => {
                            setMenu(data)
                            setLoading(false)
                     })
       }, [])
       return [menu, loading]
};

export default useMenu;