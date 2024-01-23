import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function Render() {
  return (
    <h1>Chai piyo</h1>
  )
}
// const ReactElement = {
//   type: "a",
//   props: {
//     href: "https://facebook.com",
//     target: "_blank",
//   },
//   children: ["Hello World"]
// }

const anotherReactElement = (
<a href="https://facebook.com" target="_blank">Hello World</a>
)

const anotherUserElement = "udibaba"

const reactElement = React.createElement(
  "a", //First argument is the type of element
  { //Second argument is the properties or attributes of the element
  href: "https://facebook.com",
  target: "_blank",
},
  "click me to visit facebook", //Third argument is the children or text content of the element
  anotherUserElement //Fourth argument is the evaluated expression of the JSX expression
)

ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement
);


