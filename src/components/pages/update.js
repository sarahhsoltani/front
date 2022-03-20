import React from 'react'
import {Form,Button,Modal} from "react-bootstrap"
import {useState} from 'react';
import {updateMenu} from "../redux/actions/Food"
import {useDispatch} from 'react-redux'

const UpdateMenu = ({el,id}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch()
    // state
    const [update,setupdate]=useState({name:el.name,price:el.price})
    // handelInput
    const handleChange=(e)=>{
        const {name,value}=e.target
        setupdate({
            ...update,
            [name]:value
        })
        console.log("input",update)
    }
    // update Menu

    const updatefood=()=>{
        dispatch (updateMenu(update.name, update.price,id)) 
        console.log("update",update)
        setShow(false)
        }


  return(
    <div>
    <div className='container '>
 <Button className="btn btn-warning" onClick={handleShow}>
 <i className="fas  fa-pen-fancy me-2"></i> 
   Update
</Button>

<Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
<Modal.Title className="title-modal">Modifier Menu</Modal.Title>
</Modal.Header>
<Modal.Body>
<Form >
<Form.Group controlId="formBasicEmail">
<Form.Label>Title</Form.Label>
<Form.Control type="text" placeholder="title" name='name' defaultValue={el.name}  onChange={handleChange}/>

</Form.Group><Form.Group controlId="formBasicPassword">
<Form.Label>price</Form.Label>
<Form.Control type="number" placeholder="enter year"  name='price' defaultValue={el.price}  onChange={handleChange}  />
</Form.Group>





<Button className="ms-3  mt-3" variant="secondary" onClick={handleClose}>  
Close
</Button>

<Button onClick={updatefood} >valider</Button>
</Form>
</Modal.Body>



</Modal>
</div>
</div>
   )

 }

export default UpdateMenu