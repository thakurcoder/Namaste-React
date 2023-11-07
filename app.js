// <div>
// <div>
// h1 hello 
// 

const head = React.createElement("div", { id: 'parent' }, 
React.createElement("div", { id: 'child' },
[React.createElement("h1",{},"hello 1"),
React.createElement("h1",{},"hello two")
])
)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(head)
