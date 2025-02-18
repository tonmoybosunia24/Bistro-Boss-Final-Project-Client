import { Helmet } from "react-helmet-async";
import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaWallet } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { GiCook } from "react-icons/gi";
import { FaTruckFast } from "react-icons/fa6";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import { PieChart, Pie } from 'recharts';
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const AdminHome = () => {

       const { user } = useAuth();
       const axiosSecure = useAxiosSecure();
       const { data: stats } = useQuery({
              queryKey: ['admin-stats'],
              queryFn: async () => {
                     const res = await axiosSecure.get('/admin-stats')
                     return res.data
              }
       })

       const { data: chartData = [] } = useQuery({
              queryKey: ['order-stats'],
              queryFn: async () => {
                     const res = await axiosSecure.get('order-stats')
                     return res.data
              }
       })

       const getPath = (x, y, width, height) => {
              return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
              ${x + width / 2}, ${y}
              C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
              Z`;
       };

       const RADIAN = Math.PI / 180;
       const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
              const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
              const x = cx + radius * Math.cos(-midAngle * RADIAN);
              const y = cy + radius * Math.sin(-midAngle * RADIAN);

              return (
                     <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                            {`${(percent * 100).toFixed(0)}%`}
                     </text>
              );
       };
       const TriangleBar = (props) => {
              const { fill, x, y, width, height } = props;

              return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
       };

       const pieChartData = chartData.map(data => {
              return { name: data.category, value: data.revenue }
       })

       return (
              <div>
                     <Helmet>
                            <title>Admin Home</title>
                     </Helmet>
                     <h2 className='text-2xl font-cinzel mt-5 ml-5'>Hi, Welcome {user?.displayName ? user?.displayName : 'Back!'}</h2>
                     <div className="grid grid-cols- lg:grid-cols-4 gap-5 m-5">
                            <div className="flex items-center justify-center gap-3 py-7 rounded-md border-2 bg-gradient-to-r from-sky-500 to-indigo-300">
                                   <FaWallet className="text-3xl text-white" />
                                   <div>
                                          <p className="text-white text-3xl font-semibold text-center">{stats?.revenue}</p>
                                          <h3 className="text-white text-2xl font-semibold">Revenue</h3>
                                   </div>
                            </div>
                            <div className="flex items-center justify-center gap-3 py-7 rounded-md border-2 bg-gradient-to-r from-sky-500 to-indigo-200">
                                   <IoPeople className="text-4xl text-white" />
                                   <div>
                                          <p className="text-white text-3xl font-semibold text-center">{stats?.users}</p>
                                          <h3 className="text-white text-2xl font-semibold">Customers</h3>
                                   </div>
                            </div>
                            <div className="flex items-center justify-center gap-3 py-7 rounded-md border-2 bg-gradient-to-r from-orange-500 to-fuchsia-300">
                                   <GiCook className="text-3xl text-white" />
                                   <div>
                                          <p className="text-white text-3xl font-semibold text-center">{stats?.menuItems}</p>
                                          <h3 className="text-white text-2xl font-semibold">Menu Items</h3>
                                   </div>
                            </div>
                            <div className="flex items-center justify-center gap-3 py-7 rounded-md border-2 bg-gradient-to-r from-purple-800 to-pink-200">
                                   <FaTruckFast className="text-3xl text-white" />
                                   <div>
                                          <p className="text-white text-3xl font-semibold text-center">{stats?.orders}</p>
                                          <h3 className="text-white text-2xl font-semibold">Orders</h3>
                                   </div>
                            </div>
                     </div>
                     <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-full">
                            <div className="flex-1 flex justify-center w-full">
                                   <BarChart
                                          width={window.innerWidth < 768 ? 350 : 500}
                                          height={300}
                                          data={chartData}
                                          margin={{
                                                 top: 20,
                                                 right: 30,
                                                 left: 20,
                                                 bottom: 5,
                                          }}
                                   >
                                          <CartesianGrid strokeDasharray="3 3" />
                                          <XAxis dataKey="category" />
                                          <YAxis />
                                          <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                                                 {chartData.map((entry, index) => (
                                                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                                                 ))}
                                          </Bar>
                                   </BarChart>
                            </div>
                            <div className="flex-1 flex justify-center w-full">
                                   <PieChart width={window.innerWidth < 768 ? 350 : 500} height={window.innerWidth < 768 ? 350 : 500}>
                                          <Legend layout="horizontal" verticalAlign="top" align="center" />
                                          <Pie
                                                 data={pieChartData}
                                                 cx="50%"
                                                 cy="50%"
                                                 labelLine={false}
                                                 label={renderCustomizedLabel}
                                                 outerRadius={80}
                                                 fill="#8884d8"
                                                 dataKey="value"
                                          >
                                                 {pieChartData.map((entry, index) => (
                                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                 ))}
                                          </Pie>
                                   </PieChart>
                            </div>
                     </div>
              </div>
       );
};

export default AdminHome;