
import UserInputRow from "./UserInput";

function MyExpenceTable({formDataList}){
    
    const TotalSum = () =>{
        var sum=0;
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const value = localStorage.getItem(key);
            sum+=Number(value);
        }   
        return sum;
    }
    return(
        <>
            <div className="container mt-5">
                <h1>Your Expences</h1>
                <table className="table table-bordered table-hover for-expence">  
                    
                    <thead className="table-dark">
                        <tr>
                            <th  scope="col">ID</th>
                            <th  scope="col">Product</th>
                            <th  scope="col">Amount</th>
                        </tr>
                    </thead>

                    <tbody className="table-warning">
                        
                        {
                        formDataList.map((formData, index) => (
                            <UserInputRow key={index} index={index} formData={formData} />
                        ))
                        }

                        <tr className="table-dark">
                            <td id="total-id"><b>Total</b></td>
                            <td id="total-prod"><b>{formDataList.length}</b></td>
                            <td id="total-amount"><b>{TotalSum()}</b></td>
                        </tr>

                    </tbody>

                </table>
            </div>

              
        
        </>
    )
}

export default MyExpenceTable;  // use this Component in "App.jsx"

