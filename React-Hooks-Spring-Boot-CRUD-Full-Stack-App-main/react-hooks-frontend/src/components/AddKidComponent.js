import React, {useState, useEffect} from 'react'
import {Link, useHistory, useParams } from 'react-router-dom';
import KidService from '../services/KidService'

const AddKidComponent = () => {

    const [fullName, setFullName] = useState('')
    const [account, setAccount] = useState('')
    const [bill, setBill] = useState('')
    const [kindergarten, setKindergarten] = useState('')
    const history = useHistory();
    const {id} = useParams();

    const saveOrUpdateKid = (e) => {
        e.preventDefault();

        const kid = {fullName, account, bill, kindergarten}

        if(id){
            KidService.updateKid(id, kid).then((response) => {
                history.push('/kids')
            }).catch(error => {
                console.log(error)
            })

        }else{
            KidService.createKid(kid).then((response) =>{

                console.log(response.data)
    
                history.push('/kids');
    
            }).catch(error => {
                console.log(error)
            })
        }
        
    }

    useEffect(() => {

        KidService.getKidById(id).then((response) =>{
            setFullName(response.data.fullName)
            setAccount(response.data.account)
            setBill(response.data.bill)
            setKindergarten(response.data.kindergarten)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const title = () => {

        if(id){
            return <h2 className = "text-center">Update Kid</h2>
        }else{
            return <h2 className = "text-center">Add Kid</h2>
        }
    }

    return (
        <div>
           <br /><br />
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                       {
                           title()
                       }
                        <div className = "card-body">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label">Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter name"
                                        name = "name"
                                        className = "form-control"
                                        value = {fullName}
                                        onChange = {(e) => setFullName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Account number:</label>
                                    <input
                                        type = "number"
                                        placeholder = "Enter account number"
                                        name = "account"
                                        className = "form-control"
                                        value = {account}
                                        onChange = {(e) => setAccount(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Bill :</label>
                                    <input
                                        type = "number"
                                        placeholder = "Bill"
                                        name = "bill"
                                        className = "form-control"
                                        value = {bill}
                                        onChange = {(e) => setBill(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Bill :</label>
                                    <input
                                        type = "number"
                                        placeholder = "kindergarten number"
                                        name = "kindergarten"
                                        className = "form-control"
                                        value = {kindergarten}
                                        onChange = {(e) => setKindergarten(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateKid(e)} >Submit </button>
                                <Link to="/kids" className="btn btn-danger"> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )
}

export default AddKidComponent
