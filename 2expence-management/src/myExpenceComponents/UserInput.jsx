

const UserInputRow = ({ index, formData }) => {
    if (!formData) {
      return null; // Or render a fallback UI
    }
  
    const { productName, productAmount } = formData;
    const length = index + 1;
    
    return (

      <tr>
        <th scope="row">{length}</th>
        <td>{productName}</td>
        <td>{productAmount}</td>
      </tr>
      
    );
  };

export default UserInputRow;
