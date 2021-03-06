import React ,{useState, useEffect} from 'react'




export default function Vegetables(){
    const [data,setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetch('http://localhost:5000/products/vegetables')
        .then(res => res.json())
        .then(result => {
            setLoading(true);
            setData(result);
        })
         .catch(error =>{
            setLoading(true);
            setError(error);
         })
    }, [])
   
    if(error){
        return <div> Error: {error}</div>;
    }
    else if(!loading){
        return <div>Loading ...</div>;
    }
    else{
      
        return(
                      
            <ul>
            {data.map(item =>(
               <li key={item.id}>{item.name}</li> 
            ))}
            </ul>
 
     )
    }
    
}
