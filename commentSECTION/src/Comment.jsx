import { useState } from "react";
import "./Comments.css"
import Forms from "./Forms.jsx"
export default function Comment(){

    let addNewComment = (newComm) =>{
        console.log(newComm);
        setComments((olComm) => [...olComm ,newComm]
    )
    }



    let[comments, setComments] = useState([
        {
           username : "aaqib alam",
           remark : "fantastic" ,
           rating : 9 
        }
    ]);


    return (
    <div className="main">
        
        

        

        <div className="comments">
            <h3>All comments</h3>
            
            {
           comments.map((element, idx) =>{
            return (
                <div className="comment" key = {idx}>
                <span>{element.username}</span>
                <br />
                <span>{element.remark}</span>
                <br />
                <span>{element.rating}</span>
                </div>
            )
           }) 

        }
        
</div>
            

            <div className="formWindow">
                <Forms addNewComment={addNewComment}  />
            </div>
        
    </div>

    )
}