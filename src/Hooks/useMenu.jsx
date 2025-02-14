import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useMenu = () => {
       const axiosSecure = useAxiosSecure()
       const { refetch, data: menu = [], isPending: loading } = useQuery({
              queryKey: ['menu'],
              queryFn: async () => {
                     const res = await axiosSecure.get('/menu')
                     return res.data;
              }
       })
       return [menu, refetch, loading]
};

export default useMenu;