import React from 'react'
import ReactDOM from 'react-dom/client'

 console.log("React",React);
 console.log("ReactDOM",ReactDOM);
// const root=document.getElementById("root")
const heading1 =React.createElement("h1",{className:"heading1"},"Heading1 kh");
console.log ("heading1",heading1);
const heading11=<h1 className="heading1">heading11</h1>


console.log("heading11",heading11);


const Component= ()=>{
    const name="dummy name";
return(
    <>
        <div>I as a functional component</div>
    <h1 style={{backgroundColor:"red",fontSize:"32px"}}>I am heading{5+4}</h1>
    </>
        
        
   
)
}
const Component1= ()=>    <div>I as a functional component</div>
function Component2(){
    return(
        
            <div>I as a functional component : I am a javascript function that returns some piece of JSX</div>

    
    )    


}
const heading2 =React.createElement("h1",{className:"heading3"},"Heading3 ");


 const container1 =React.createElement("div",{className:"container"},[heading1,heading11,heading2]);
 //const container2 =React.createElement("div",{className:"container"},heading2);
// console.log(container1)
// //const heading2 =React.createElement("h2",{class:"heading2"},'heading2')
// const container2 =React.createElement("div",{class:"container2",style:{backgroundColor:"blue"}},heading2 =React.createElement("h2",{class:"heading2"},'heading2'))
 const root=ReactDOM.createRoot(document.getElementById("root"));
 root.render(<Component/>);
 //root.render(Component());