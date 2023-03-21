import { useState } from 'react';
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

import CustomTable from './components/Table';
import ModalAddProduct from './components/ModalAddProduct';

import { useModalForm } from './components/ModalAddProduct/useModalForm';

import './App.css';
function App() {

  
  const [ openModal, setOpenModal] = useState(false)

  const handleOpenModal = () =>{
    setOpenModal(!openModal)
    reset()
  }
  
  const { pageData, totalPage, handleDelete,  handleSearch, handleSubmit, addProduct, register, errors, handlePage, reset } = useModalForm({ handleClose:handleOpenModal});

  return (
    <div className="App">
      <header className="App-header">
          <Stack>
            Nombre:
            <TextField
              onChange={handleSearch}
              
            />
          </Stack>
        <CustomTable  rows={pageData} columns={["Nombre", "Precio", "Descripción", ""]} totalPage={totalPage} onClick={handleOpenModal} handlePage={handlePage} handleDelete={handleDelete}/>
        {openModal && <ModalAddProduct open={openModal} handleClose={handleOpenModal} handleSubmit={handleSubmit} addProduct={addProduct} register={register} errors={errors}/>}
      </header>
    </div>
  );
}

export default App;
