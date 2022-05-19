const verduleria = [
    {id:1 , name: "banana" , isStock: true },
    {id:2 , name: "manzana" , isStock: false },
    {id:3 , name: "papa" , isStock: false },
    {id:4 , name: "pera" , isStock: true },
    {id:5 , name: "fresa" , isStock: true }
]

const App = (
    <div>
    <h2>Listado de productos</h2>
       <ul>
            {
               verduleria.map((product)=>{
                   return (
                       <li key={product.id}>{product.name}</li>
                   )
               })
           }
       </ul>
       <h2>Productos disponibles</h2>
       <ul>            
           {
               verduleria.map(product =>{
                if(product.isStock){
                    return (
                        <li key={product.id}>{product.name}</li>
                    )
                }
               })
           }
       </ul>
    </div>
)

const hookedElement = document.getElementById("root");
ReactDOM.render(App, hookedElement)

