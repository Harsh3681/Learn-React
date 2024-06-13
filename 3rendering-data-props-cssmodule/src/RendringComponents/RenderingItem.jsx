
function ItemRendring() {
  
    let MyItem = ["j1","Pani","pohe","Shira"];

    return (
        <>
        <h1>Daily Items</h1>

        <ul className="list-group">
            {                  // <-- this curly braces mainly for to write "Js"
                MyItem.map((saman) => 
                    <li key={saman} className="list-group-item">{saman}</li>  // here we must need to assigned "key" for each item. so here let's we consider key as our "saman" itself. Note without "key" consol show lot's of error.
                )
            }
        </ul>


        </>
    )
}
  
export default ItemRendring;