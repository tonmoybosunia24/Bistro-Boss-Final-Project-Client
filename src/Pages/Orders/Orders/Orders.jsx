import { Helmet } from "react-helmet-async";
import NavBar from "../../Shared/NavBar/NavBar";
import Cover from "../../Shared/Cover/Cover";
import shopBg from '../../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../../Hooks/useMenu";
import OrderTabs from "../OrderTabs/OrderTabs";
import { useParams } from "react-router";
import { useState } from "react";
import Footer from "../../Shared/Footer/Footer";

const Orders = () => {

       const [menu] = useMenu();
       const categories = ['Salad', 'Pizza', 'Soups', 'Desserts', 'Drinks']
       const { category } = useParams()
       const initialIndex = categories.indexOf(category)
       const [tabIndex, setTabIndex] = useState(initialIndex)
       const dessert = menu.filter(item => item.category === 'dessert')
       const soups = menu.filter(item => item.category === 'soup')
       const salad = menu.filter(item => item.category === 'salad')
       const pizza = menu.filter(item => item.category === 'pizza')
       const drinks = menu.filter(item => item.category === 'drinks')

       return (
              <div className="dark:bg-[#111827] dark:text-white">
                     <Helmet>
                            <title>Order Food</title>
                     </Helmet>
                     <NavBar className='sticky top-0 left-0 z-20'></NavBar>
                     <Cover classname='lg:min-h-screen' img={shopBg} title='Our Shop' subTitle='Would you like to try a dish?'></Cover>
                     <div className="lg:max-w-screen-lg mx-auto px-5 lg:px-0">
                            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)} selectedTabClassName="text-[#BB8506] border-b-2 border-[#BB8506]" className='my-12'>
                                   <TabList className=" flex justify-center lg:gap-5 font-semibold text-xs  mb-7">
                                          <Tab className="px-2 py-1 font-medium uppercase">Salad</Tab>
                                          <Tab className="px-2 py-1 font-medium uppercase">Pizza</Tab>
                                          <Tab className="px-2 py-1 font-medium uppercase">Soups</Tab>
                                          <Tab className="px-2 py-1 font-medium uppercase">Desserts</Tab>
                                          <Tab className="px-2 py-1 font-medium uppercase">Drinks</Tab>
                                   </TabList>

                                   <TabPanel>
                                          <OrderTabs items={salad}></OrderTabs>
                                   </TabPanel>
                                   <TabPanel>
                                          <OrderTabs items={pizza}></OrderTabs>
                                   </TabPanel>
                                   <TabPanel>
                                          <OrderTabs items={soups}></OrderTabs>
                                   </TabPanel>
                                   <TabPanel>
                                          <OrderTabs items={dessert}></OrderTabs>
                                   </TabPanel>
                                   <TabPanel>
                                          <OrderTabs items={drinks}></OrderTabs>
                                   </TabPanel>
                            </Tabs>
                     </div>
                     <Footer></Footer>
              </div>
       );
};

export default Orders;