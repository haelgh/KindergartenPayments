import React, { useEffect, useState } from 'react'
import KidServices from '../services/KidServices';
import { Link } from 'react-router-dom';


const ListKidComponent = () => {

   const [kids, setKids] = useState([])

   useEffect(() => {

    getAllKids();
}, [])

    const getAllKids = () => {
        KidServices.getAllKids().then((response) => {
            setKids(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const deleteKid = (id) => {

        KidServices.deleteKid(id).then((response) => {
            getAllKids();
        }).catch(error => {console.log(error);})
    }

  return (
    <div className='container'>
      <h2 className='text-center'> Accounting of Childrens' Payments </h2>
      <Link to ='/add-kid' className='btn btn-primary mb-2'>Add Kid</Link>
      <table className="table table-bordered table-striped">
                <thead>
                    <th> Id </th>
                    <th> Name </th>
                    <th> Bill </th>
                    <th> Account Number </th>
                    <th> Kindergarten </th>
                    <th> Actions </th>
                </thead>
                <tbody>
                    {
                        kids.map(
                            kid =>
                            <tr key = {kid.id}>
                                <td> {kid.id} </td>
                                <td> {kid.fullName} </td>
                                <td>{kid.bill}</td>
                                <td>{kid.account}</td>
                                <td>{kid.kindergarten}</td>
                                <td>
                                    <Link className='btn btn-info' to ={`/edit-kid/${kid.id}`}>Edit</Link>
                                    <button className='btn btn-danger' onClick={() => deleteKid(kid.id)} style={{"margin-left":"15px"}}>Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
    </div>
  )
}

export default ListKidComponent
