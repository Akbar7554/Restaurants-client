import { useState } from "react"
import orderCover from "../../../assets/shop/banner2.jpg"
import Cover from "../../Shared/Cover/Cover"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"
import useMenu from "../../../hooks/useMenu"
import OrderTab from "../OrderTab/OrderTab"
import { useParams } from "react-router-dom"
const Order = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"]
  const { category } = useParams()
  const initialIndex = categories.indexOf(category)
  const [tabIndex, setTabIndex] = useState(initialIndex)
  const [menus] = useMenu()
  const dessert = menus.filter((item) => item.category === "dessert")
  const salad = menus.filter((item) => item.category === "salad")
  const pizza = menus.filter((item) => item.category === "pizza")
  const soup = menus.filter((item) => item.category === "soup")
  const drinks = menus.filter((item) => item.category === "drinks")
  return (
    <div>
      <Cover img={orderCover} title="Order Food"></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soups</Tab>
          <Tab>Desserts</Tab>
          <Tab>Drinks</Tab>
        </TabList>

        <TabPanel>
          <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={dessert}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default Order
