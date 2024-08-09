
// if there is an certain "users" condition, and according to that user condition we need to 
// reder our data then always we "can not" use the "if" "else" statement

// ############ Another Solution. ############
// 1) By "If-Else" statement 
// 2) By "Ternary Operator"         ? :
// 3) By "Logical Operator" i.e by && <--- operator

//  Let's decide condition that we need to render "MyItem" data only if length!==0 and we need to show "Daily Items" heading.
// let's see         

function RenderDataAsPerCondition() {
  
    let MyItem = [];
    // let MyItem = ["j1","Pani","pohe","Shira"];
    
    // 1st solution     // if comment if wala sol then below two solu works (2nd & 3rd)
    if(MyItem.length===0){
        return <h3>I Am 1st solution for "Condtional Rendering"</h3> 
    }

    // 2nd solution
    let MyCondition =  MyItem.length===0 ? <h3>I am 2nd Ternary Operator Solution</h3> : null;

    return (
        <>
        <h1>Daily Items</h1>  {/*<---- so here we show below solution in curly braces that becz of condtion i.e after this "h1" tag we need to apply this codition. But "if-else" solu didn't fuck care about "Any codition" */}

        {
            MyItem.length===0 && <h3>I am 3rd logical Solution </h3>   // 3rd soln here <h3></h3> tag already true if "MyItem.length===0" also true then it show "Saman show kro" text along with above <h1></h1> else normal below data render.
        }      

        {
            MyCondition         // here 2nd "Ternary Operator Solution"
        }

        <ul className="list-group">
            {                  // <-- this curly braces mainly for to write "Js"
                MyItem.map((saman) => 
                    <li key={saman} className="list-group-item">{saman}</li>  // here we must need to assigned "key" for each item. so here let's we consider key as our "saman" itself. Note without "key" consol show lot's of error.
                )
            }
        </ul>


        </>
    );
}
  
export default RenderDataAsPerCondition;





