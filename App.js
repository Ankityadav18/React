import React from "react";
import ReactDOM from "react-dom/client"


const parent=React.createElement('div' ,{id:'parent'},
    React.createElement('div',{id:'child'},
        [React.createElement('h1',{id:'heading'},'This is react class'),React.createElement('h2',{},'done and dusted')]),
      React.createElement('div',{id:'child2'},
       [ React.createElement('h1',{},"this is java", React.createElement('h2',{},'this is this only'))]
      )  
)
console.log(parent); //object
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(parent)