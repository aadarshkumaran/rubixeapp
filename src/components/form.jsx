import { useState } from 'react'
import '../styles/form.css'
const Form = () => {
    let [name,setName] = useState("")
    let [email,setEmail] = useState("")
    let [phone,setPhone] = useState("")

    let handleSubmit = (e) => {
        let userData = {name,email,phone}

        fetch(`http://localhost:1000/users/`,{
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body:JSON.stringify(userData)
        })
        alert(`Thank You for registering ${name}! Our team will comeback to you.`)
    }
    return (
        <div className="Form">
            <div className="container">
                <div className="form-left">
                    <h1>GET IN TOUCH</h1>
                    <h4>Please Complete the form and we will comeback to you.</h4>
                </div>
                <div class="vl"></div>
                <div className="form-right">
                    <form action="" onSubmit={handleSubmit}>
                        <label>Name *</label>
                        <input type="text" placeholder="Enter your Name" required value={name} onChange={(e)=>setName(e.target.value)}/>
                        <label>Email *</label>
                        <input type="email" placeholder="Enter Your E-mail" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        <label>Phone Number *</label>
                        <input type="tel" placeholder="Enter Your Phone Number" maxLength="10" required value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                        <button>Register Now</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form;