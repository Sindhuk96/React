


const parent=React.createElement("div",{id:"parent"},
                [React.createElement("div",{id:"child"}, 
                    [React.createElement("h1",{id:"child"},"I'm H1 tag"),
                    React.createElement("h2",{id:"child"},"I'm H2 tag")]),
                 
                    React.createElement("div",{id:"child"}, 
                    [React.createElement("h1",{id:"child"},"I'm H1 tag"),
                    React.createElement("h2",{id:"child"},"I'm H2 tag")])
                ]   
                    );
           

console.log(parent);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);