
import Peoples from "./1Peoples_Fun_For_List_Rendering"

function List_Rendering()  {

// 1st
    // below approch to render the "simple" array

    // const names = ["jay", "Abhay", "Wirajay", "Parajay"]
    // return (
    //   <div> { names.map(i => <h2>{i}</h2>) } </div>
    // )

    // ----------------------------------------------------------------------
    // below is "Array Object"

    const PersonList = [
        {
            id:2,
            name:"Abhay",
            salary:23434,
            skill :"java"
        },
        {
            id:1,
            name:"Nagajun",
            salary:73672,
            skill :"Js"
        },
        {
            id:5,
            name:"Ratan",
            salary:79878,
            skill :"Ruby"
        },
        {
            id:69,
            name:"Rina",
            salary:34562,
            skill :"WebD"
        },
        {
            id:87,
            name:"Siya",
            salary:82631,
            skill :"C"
        }
    ]


// 2nd
    //  If we wnat to render the "Array Object" See Below
    // first here we create array object in funct "NameList" before "return" keyword


    // const justName = PersonList.map(manus => (
    //     <h2>
    //         I am {manus.name} my id is {manus.id} my Skills {manus.skill} with Salary {manus.salary}
    //     </h2> 
    // ))

    // return <div>{justName}</div>

 // ----------------------------------------------------------------------

//  3rd 
//  now we try to render the ArrayObject in other file 
//  using ########### "props" and "components"  ###########

    const justName = PersonList.map( i => <Peoples key={i.id} manus={i} />)     // here "manus={i}" is "name of props" which we pass to the "Peoples" name function in destructure formate which we import from "1Peoples_Fun_For_List_Rendering" file

    //  here we use "key={i.id}" for uniqueness of the list we can use anything in list which we think as unique throughout process it may be "name also"
       
    return <div>{justName}</div>    // its iMP to return it from return statement amm


}

export default List_Rendering
