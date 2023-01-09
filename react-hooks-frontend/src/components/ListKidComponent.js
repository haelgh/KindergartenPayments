import React, { useEffect, useState } from 'react'
import KidServices from '../services/KidServices';
import { Link } from 'react-router-dom';
import { saveAs } from "file-saver";


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


   const sendKid = (id)=>{
    let data2Send = '';
        fetch("http://localhost:8080/api/v1/kids/" + id) //1
        .then((response) => response.json()) //2
        .then((kid) => {
            data2Send = "Dear Parent! This is a friendly reminder that the sum to pay for your child in this month is " + kid.bill + " UAH. Please send money till the end of this week. Your's sincerely, Network of Kindergartens 'Sunshine'"; //3
            var blob = new Blob([data2Send], {
                type: "text/plain;charset=utf-8"
              });
              saveAs(blob, kid.fullName + "_BankExtract.txt");
              
        });
   }

  return (
    <div className='container'>
      <h2 className='text-center'> Accounting of Childrens' Payments </h2>
      <Link className='btn btn-secondary' to ={`/`} style={{"position":"fixed", "top":"10px", "right":"10px"}}>Log out</Link>
      <Link to ='/add-kid' className='btn btn-primary mb-2'>Add Kid</Link>
      <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th> Id </th>
                        <th> Name </th>
                        <th> Bill </th>
                        <th> Account Number </th>
                        <th> Kindergarten </th>
                        <th> Actions </th>
                    </tr>
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
                                    <button className='btn btn-success' onClick={() => sendKid(kid.id)} style={{"marginRight":"15px"}}>Extract</button>
                                    <Link className='btn btn-info' to ={`/edit-kid/${kid.id}`}>Edit</Link>
                                    <button className='btn btn-danger' onClick={() => deleteKid(kid.id)} style={{"marginLeft":"15px"}}>Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
    </div>
  )
}

export default ListKidComponent;
