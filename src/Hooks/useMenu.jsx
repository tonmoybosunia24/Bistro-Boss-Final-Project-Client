import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProviders";

const useMenu = () => {
       const [menu, setMenu] = useState([])
       const {loading, setLoading} = useContext(AuthContext)
       useEffect(() => {
              fetch('menu.json')
                     .then(res => res.json())
                     .then(data => {
                            setMenu(data)
                            setLoading(false)
                     })
       }, [])
       return [menu, loading]
};

export default useMenu;