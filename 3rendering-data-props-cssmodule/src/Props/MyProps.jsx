
//  Below is "props" by ----->   "functional component"

// const MefunctCompo = (props) => {
const FullNameWithProps = ({name, sirname}) => {       // here we try to destructure Props

    return (
        <>
        {/* <h1> Try Props By Function Component name {props.name} and surname {props.sirname}</h1> */}   {/* This is by "without destructuring" */}

        <h1> Your name {name} and surname {sirname}</h1>       {/* This is by With "destructuring"


                {/* {props.children}   */}     {/* It work "Without" "destructuring" only */}


                {/* #### NOTE ####

                If we have mention the "timepass" or anything with "this.props.timepass" then we need to mention same name as in "App.js" file also */}
        

                {/*  "props.children" means that if we want to pass any html tag or any text or any component then we can pass it as a children and tyanchi "properties only tewdya sect lach lagu hoil
                
                #### jase aata aapan ek button create karu 
                "App.js" madhe for "Greet" Component ####
                
                1st section karta "Work_Button" and 2nd section karta "Action_Button" tar te only specfic tyancha tyancha section karta available work krtil beacause of "{props.children}  <<----    */}
            
        </>
    )
}

export default FullNameWithProps;
