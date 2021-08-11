import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddEvents = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageUrl,setImageUrl] = useState(null)

    const onSubmit = data =>{ 
        const eventData ={
            name:data.name,
            imageUrl:imageUrl
        }
        const url = "http://localhost:5000/addEvent"
       console.log(eventData)
      fetch(url,{
          method:"POST",
          headers:{'content-type': 'application/json'},
          body:JSON.stringify(eventData)

      })
      .then(res => console.log('servar side ',res))
        
    };
    const handleImgUpload = event =>{
        console.log(event.target.files[0])
        const imageData = new FormData()
        imageData.set('key','5c1ff4f91c14ad66771d66d3298e5026');
        imageData.append('image',event.target.files[0])
     
        axios.post('https://api.imgbb.com/1/upload', 
            imageData)
          .then(function (response) {
            setImageUrl(response.data.data.display_url)
          })
          .catch(function (error) {
            console.log(error);
          });

    }
    return (
        <div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="name"{...register("example")} />
        <input type="file"  onChange={handleImgUpload}/>
        <input type="submit" />
      </form>   
        </div>
    );
};

export default AddEvents;