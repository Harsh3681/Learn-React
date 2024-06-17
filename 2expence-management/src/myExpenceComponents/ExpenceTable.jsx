
import UserInputRow from "./UserInput";

function MyExpenceTable({formDataList}){
    return(
        <>
    
            <div className="container">
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
                            <td id="total-prod"><b></b></td>
                            <td id="total-amount"><b></b></td>
                        </tr>
                    </tbody>

                </table>
            </div>

              
        
        </>
    )
}

export default MyExpenceTable;

