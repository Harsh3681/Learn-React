import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import './App.css'
import { RecoilRoot, useSetRecoilState } from 'recoil';
import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { titleDescriptionState } from './storeForRecoil/atoms/myAtom';
import axios from 'axios'; // Import axios for making HTTP requests

function AtomSelectorTodoApp() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const setTitleDesciption = useSetRecoilState(titleDescriptionState);

  const handleSubmit = () => {
    const myTodoObj = {
      title: title,
      description: description
    };

    
    // Send the todo data to the backend
    axios.post('http://localhost:5000/api/todo', myTodoObj)
      .then(response => {
        console.log(response.data.message);
      })
      .catch(error => {
        console.error('There was an error submitting the todo:', error);
      });
  };

  return (
    <>
      <RecoilRoot>
        <div className={"forCard"}>
          <Card variant={"outlined"} className={"insideCard"}>
            <Typography variant="h5" style={{ display: 'flex', justifyContent: 'center' }}>
              Todo App
            </Typography>

            <div >
              <TextField label="Title" variant="outlined" className={"insideCard"} 
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
              
              <TextField label="Description" variant="outlined" className={"insideCard"} style={{ marginTop: 10 }}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </div>

            <Button
              size={"larger"} 
              variant="contained" 
              style={{ marginTop: 10 }} 
              onClick={handleSubmit} // Use the handleSubmit function
            >Submit</Button>
         
          </Card> 
        </div>
      </RecoilRoot>
    </>
  )
}

export default AtomSelectorTodoApp;
