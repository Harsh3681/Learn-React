

const ArrayProductRen = ({ans}) =>{

    return(
        <>
            <hr />
            <br /><br />
            <h1>Rendering Array Data With Props</h1>
            <ul className="list-group">
            {                  // <-- this curly braces mainly for to write "Js"
                ans.map((i) => 
                    <li key={i} className="list-group-item">{i}</li>  // here we must need to assigned "key" for each item. so here let's we consider key as our "saman" itself. Note without "key" consol show lot's of error.
                )
            }
            </ul>

        </>
    )
}

export default ArrayProductRen;