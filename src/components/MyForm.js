import { useState } from "react";

function MyForm(){
    //const[name,setName]=useState("")
    //const[age,setAge]=useState("")
    //const[email,setEmail]=useState("")
    //console.log('Current State',name)

    const [inputs, setInputs]=useState({phone:"+91",email:"@gmail.com",country:"India", about:"I am Student"});

    function handleSubmit(e){
        e.preventDefault(); //prevent refresh
        console.log("Form Submitted")
        //console.log('Current State', name ,age, email)
        console.log('Current State', inputs)
    
    }

    function handleChange(e){
        const name=e.target.name
        const value=e.target.value
        setInputs((previousState)=>{return{...previousState,[name]: value }})

    }

    {/*return(
        <form onSubmit={handleSubmit}>
            <h1>Forms</h1>
            <label>Enter Your Name: <input type="text" onChange={ (e) =>{ setInputs ( (previousState) =>{return {...previousState,name: e.target.value} } ) } }/></label><br/>  
            <label>Enter Your Age: <input type="text" onChange={ (e) =>{ setInputs ( (previousState) =>{return {...previousState,age: e.target.value} } ) } }/></label><br/>
            <label>Enter Your Email: <input type="email" onChange={ (e) =>{ setInputs ( (previousState) =>{return {...previousState,email: e.target.value} } ) } }/></label><br/>
            <input type="submit" value="Submit Form"/><br/>
        </form>
    )*/}

    //shorter form by using function handleChange
    return(
        <form onSubmit={handleSubmit}>
            <h1>Forms</h1>
            <label>Enter Your Name: <input type="text" name="name" onChange={handleChange}/></label><br/>  
            <label>Enter Your Age: <input type="text" name="age" onChange={handleChange}/></label><br/>
            <label>Enter Your Email: <input type="text" name="email" onChange={handleChange} value={inputs.email}/></label><br/>
            <label>Enter Your PhoneNo: <input type="text" name="phone" onChange={handleChange} value={inputs.phone}/></label><br/>
            <label>Enter Your country: <select name="country" onChange={handleChange} value={inputs.country}>
            <option value="">Select</option>
                <option value="Australia">Australia</option>
                <option value="India">India</option>
                <option value="UnitedStates">United States</option></select></label><br/>
                <label>Enter About You: <textarea name="about" value={inputs.about} onChange={handleChange} >
                    </textarea></label>
            <input type="submit" value="Submit Form"/><br/>
        </form>
    )
}
export default MyForm;