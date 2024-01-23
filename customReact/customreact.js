// function customRender(reactElement, container) {
//     const domElement = document.createElement(reactElement.type);
//     domElement.innerHTML = reactElement.children;
//     domElement.setAttribute("href", reactElement.props.href);
//     domElement.setAttribute("target", reactElement.props.target);
//     container.appendChild(domElement);
// }

function customRender(reactElement, container){
    const domElement = document.createElement(reactElement.type);
    for (const prop in reactElement.props) {
        if (prop === "children") {
            continue;
        }
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    domElement.innerHTML = reactElement.children;
    container.appendChild(domElement);
}




const reactElement = {
  type: "a",
  props: {
    href: "https://facebook.com",
    target: "_blank"
  },
  children: ["Hello World"]
}

const mainContainer = document.getElementById("root");
customRender(reactElement, mainContainer);
