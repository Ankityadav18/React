/**
 * <div id='parent'>
 * <div id='child'>
 * <h1>This is react class</h1>
 * <h2>Done and dustedfff</h2>
 * </div>
 * <div id='child2'>
 * <h1>This is react class</h1>
 * <h2>Done and dustedfff</h2>
 * </div>
 * </div>
 */



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