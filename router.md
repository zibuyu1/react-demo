this.props.history.push(this.props.location.pathname)

# react-router 和 react-router-dom 的区别

## 作用

* react-router **React Router 核心**
* react-router-dom **用于 DOM 绑定的 React Router**
* react-router-redux **React Router 和 Redux 的集成**
* react-router-config **静态路由配置的小助手**

## 使用

那么开发过程中react-router和react-router-dom我们选择那一个，二者只需选其一即可，他们的不同之处在于react-router-dom比react-router多处了Link， BrowserRouter这样的DOM类组件，如果搭配redux，你还需要使用react-router-redux。

## react-router-dom的一些组件

&lt; BrowserRouter &gt;

一个&lt; Router &gt;，它使用HTML5 history API (pushState、replaceState和popstate事件)来保持UI与URL同步。此组件拥有以下属性：

basename: string

作用：为所有位置添加一个基准URL
使用场景：假如你需要把页面部署到服务器的二级目录，你可以使用 basename 设置到此目录。