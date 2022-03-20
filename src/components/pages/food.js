import React, { useEffect,useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'
import { getFoodApi ,deleteMenu} from '../redux/actions/Food';

import AddFood from './AddFood';
import UpdateMenu from './update';

const Food = () => {
  const [search,setSearch]=useState("")
  const tabs=useSelector(state=>state.tab)
  console.log('tabs', tabs)
  const dispatch=useDispatch();
  //get
  useEffect(()=>{
      dispatch(getFoodApi())
  }, [dispatch]);
  // -------------handleChange
  const handleChangee=(e)=>{
    setSearch(
      e.target.value
    )
  }
    //DeleteMenu
    const deleteMenuu=(id)=>{
      dispatch (deleteMenu(id)) 
      // console.log(deleteMenu(id))
    }
    return (
    <div className='container'>
      <AddFood/>
      <br/>
      <form class="d-flex mb-5">
        <input class="form-control me-2" type="search" value={search} onChange={handleChangee} placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success " type="submit">Search</button>
      </form>
        <div className='row'>
          {
            tabs.filter(el=>
              el.name.toLowerCase().includes(search.toLowerCase())
              ).map((el,key) =>
            <div className='col-4' key={key}>
              <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>{el.name}</Card.Title> 
    <Card.Text>
      {el.price}
    </Card.Text>
   
    <UpdateMenu id={el._id}  el={el}/>
    <Button className="btn btn-danger  h-25" onClick={() => deleteMenuu(el._id)}>delete  </Button>
  </Card.Body>
</Card>
              </div>
            )
          }
        </div>
        
    </div>
  )
}

export default Food