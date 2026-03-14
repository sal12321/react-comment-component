import { useState } from "react";
import "./Forms.css"
export default function Forms( {addNewComment}){
    let[formData, setFormData] = useState({
        username : "",
        remark : "",
        rating : 5
    })

    let handleInput = (event) =>{

        let value = event.target.value;
        let fieldName = event.target.name;
        setFormData({
            ...formData , [fieldName] : value
        });
    }

    let handleSubmit = (event)=>{
event.preventDefault();
addNewComment(formData);
        return({

            username : "",
            remark : "",
            rating : 5

        });
    }



    return (
        <>
        <form action="" onSubmit={handleSubmit}>

            <label htmlFor="username">Username</label>
{/* <br /> <br /> */}
            <input type="text"
             id ="username" 
             value={formData.username} 
             name = "username"
             onChange={handleInput}
             />
             {/* <br /> <br /> */}

            <label htmlFor="remark">Remark</label>
{/* <br /> <br /> */}
                        <input type="text"
                         id ="remark" 
                         value={formData.remark}
                         name = "remark" 
                         onChange={handleInput}
                          />
                          {/* <br /> <br /> */}
            <label htmlFor="rating">Rating</label>
{/* <br /> <br /> */}
                        <input type="text" 
                        id ="rating" 
                        value={formData.rating} 
                        name = "rating" 
                        onChange={handleInput}
                        />
                        {/* <br /><br /> */}

                        <button>Add Comment</button>
        </form>
        </>
    )

}