import React,{useState,useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
    const [post,setposts]=useState({});
    const [id,setId]=useState(1);
    const [fetchidfrombtn,setidfrombtn]=useState(1);

    const handleclick=() =>{
        setidfrombtn(id)
    }
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${fetchidfrombtn}`)
        .then(res => {
            console.log(res)
            setposts(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    },[fetchidfrombtn])

   


    return (
        <div>
<input type='text' value={id} onChange={e=> setId(e.target.value)}/>
<br />
<button type='button' onClick={handleclick}  >Fetch</button>
<br />
            {
                post.title
            }
         {/* <ul>{
             posts.map(post =>(
                 <li key={post.id}>
{
    post.title
}
                 </li>
             ))

             }</ul>    */}
        </div>
    )
}

export default DataFetching
