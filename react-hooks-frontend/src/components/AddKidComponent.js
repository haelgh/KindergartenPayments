import React,  { useState, useEffect}  from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom';
import KidServices from '../services/KidServices';

const AddKidComponent = () => {

    const [fullName, setFullName] = useState('')
    const [account, setAccount] = useState('')
    const [bill, setBill] = useState('')
    const [kindergarten, setKindergarten] = useState('')
    const navigate = useNavigate();
    const {id} = useParams();

    const saveOrUpdateKid = (e) => {
        e.preventDefault();

        const kid = {fullName, account, bill, kindergarten}

        if(id){
            KidServices.updateKid(id, kid).then((response) => {
                navigate('/kids');
            }).catch(error => {
                console.log(error)
            })
        }else{
            KidServices.createKid(kid).then((response) =>{
                console.log(response.data)
                navigate('/kids');
            }).catch(error => {
                console.log(error)
            })
        }
        
    }

    useEffect(() => {

        KidServices.getKidById(id).then((response) =>{
            setFullName(response.data.fullName)
            setAccount(response.data.account)
            setBill(response.data.bill)
            setKindergarten(response.data.kindergarten)
        }).catch(error => {
            console.log(error)
        })
    }, [id])

    const title = () => {

        if(id){
            return <h2 className = "text-center" style={{"margin-top":"15px"}}>Update Kid's Account</h2>
        }else{
            return <h2 className = "text-center" style={{"margin-top":"20px"}}>New Kid's Account</h2>
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
                                    <label className = "form-label"> Enter Full Name :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Full name"
                                        name = "fullName"
                                        className = "form-control"
                                        value = {fullName}
                                        onChange = {(e) => setFullName(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Enter IBAN :</label>
                                    <input
                                        type = "number"
                                        placeholder = "IBAN"
                                        name = "account"
                                        className = "form-control"
                                        value = {account}
                                        onChange = {(e) => setAccount(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label">Enter Bill :</label>
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
                                    <label className = "form-label"> Enter Kindergarten number:</label>
                                    <input
                                        type = "number"
                                        placeholder = "Kindergarten number"
                                        name = "kindergarten"
                                        className = "form-control"
                                        value = {kindergarten}
                                        onChange = {(e) => setKindergarten(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <button className = "btn btn-success" onClick = {(e) => saveOrUpdateKid(e)} >Submit </button>
                                <Link to="/kids" className="btn btn-danger" style={{"margin-left":"235px"}}> Cancel </Link>
                            </form>

                        </div>
                    </div>
                </div>

           </div>

        </div>
    )

}

export default AddKidComponent