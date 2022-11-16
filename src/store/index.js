import React from "react"
import LoginStore from "./login.Store"
class RootStore {
  //组合模块
  constructor() {
    this.LoginStore = new LoginStore()
  }

}
// 到处usestore方法提供组件
const StoreContext = React.createContext(new RootStore())
export const useStore = () => React.useContext(StoreContext)