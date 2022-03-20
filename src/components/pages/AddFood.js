import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addMenuApi } from '../redux/actions/Food';


const AddFood = () => {
const dispatch= useDispatch()
       //State
     const [input,setInput]= useState({name: "", price: ""})
    //State Modal
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //handleChange
  const handleChange=(e)=> {
    const {name,value}=e.target
  setInput({
 ...input,
 [name]:value 
})
  console.log(input) }
   const addFoodie=()=>{
       dispatch ( addMenuApi(input.name,input.price))
       console.log(input)
       setShow(false)
   }
 
  return (
    <div>
          <Button variant="primary" onClick={handleShow}>
        Add a Food if u want
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="mekla"  name="name" onChange={handleChange} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
    <Form.Label>price</Form.Label>
    <Form.Control type="number" placeholder="soum" name="price" onChange={handleChange} />
  </Form.Group>
</Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={addFoodie}>Save</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddFood