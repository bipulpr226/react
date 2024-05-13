import React from 'react'
import ReactDOM from 'react-dom/client'

 console.log("React",React);
 console.log("ReactDOM",ReactDOM);
// const root=document.getElementById("root")
const heading1 =React.createElement("h1",{className:"heading1"},"Heading1 ");
const heading2 =React.createElement("h1",{className:"heading3"},"Heading3 ");
 const container1 =React.createElement("div",{className:"container"},[heading1,heading2]);
 //const container2 =React.createElement("div",{className:"container"},heading2);
// console.log(container1)
// //const heading2 =React.createElement("h2",{class:"heading2"},'heading2')
// const container2 =React.createElement("div",{class:"container2",style:{backgroundColor:"blue"}},heading2 =React.createElement("h2",{class:"heading2"},'heading2'))
 const root=ReactDOM.createRoot(document.getElementById("root"));
 root.render(container1);