import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import KidService from '../services/KidService'

const ListKidComponent = () => {

    const [kids, setKids] = useState([])

    useEffect(() => {

        getAllKids();
    }, [])

    const getAllKids = () => {
        KidService.getAllKids().then((response) => {
            setKids(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const deleteKid = (kidId) => {
       KidService.deleteKid(kidId).then((response) =>{
        getAllKids();

       }).catch(error =>{
           console.log(error);
       })
        
    }

    return (
        <div className = "container">
            <h2 className = "text-center"> List Kids </h2>
            <Link to = "/add-kid" className = "btn btn-primary mb-2" > Add Kid </Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <th> Kid Id </th>
                    <th> Kid Name </th>
                    <th> Kid Account Number </th>
                    <th> Kid Bill </th>
                    <th> Kid Kindergarten </th>
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
                                    <Link className="btn btn-info" to={`/edit-kid/${kid.id}`} >Update</Link>
                                    <button className = "btn btn-danger" onClick = {() => deleteKid(kid.id)}
                                    style = {{marginLeft:"10px"}}> Delete</button>
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
