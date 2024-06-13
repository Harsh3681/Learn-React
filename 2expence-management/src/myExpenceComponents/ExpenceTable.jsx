
function MyExpenceTable(){
    return(
        <>
            {/* <div className="center-wrapper">
                <div className="create-table hidden"> */}

                <div className="container">
                    <h1>Your Expences</h1>
                    <table className="table table-bordered table-hover for-expence">  
                        {/* <thead className="amhead" > */}
                        <thead className="table-dark">
                            <tr>
                                <th>ID</th>
                                <th>Product</th>
                                <th>Amount</th>
                            </tr>
                        </thead>

                        <tbody className="table-warning">
                        {/* <tbody className="ambody"> */}
                            {/* <tr id="am-total-tr"> */}
                            <tr className="table-dark">
                                <td  id="total-id"><b>Total</b></td>
                                <td  id="total-prod"><b></b></td>
                                <td  id="total-amount"><b></b></td>
                            </tr>
                        </tbody>

                    </table>
                </div>

                {/* </div>
            </div> */}
        
        </>
    )
}

export default MyExpenceTable;

