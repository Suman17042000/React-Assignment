import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

export default function Individualimage({data}) {
    const {id}=useParams();
    const individualimage = data.find(item => (item.id).toString() === id);
    const navigate = useNavigate();

  return (
    <>
    <div className='button-individual'>
    <Link to='/'><Button variant="primary">Back</Button></Link>

    </div>
     
    <div className="container individual-image">
         
        <h2> Author Name : {individualimage.author}</h2>
        <img src={`https://picsum.photos/id/${individualimage.id}/200/200`} alt={individualimage.author} />


    </div>
    
    </>
  )
}
