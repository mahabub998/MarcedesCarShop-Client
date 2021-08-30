import axios from "axios";
import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import swal from 'sweetalert';

const AddEvents = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [imageUrl, setImageUrl] = useState(null);

  const onSubmit = (data) => {
    const eventData = {
      name: data.name,
      price: data.price,
      imageUrl: imageUrl,
    };
    const url = `http://localhost:5000/addEvent`;
    console.log(eventData);
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(eventData),
    }).then((res) => console.log("server side response ", res));
  };

  const handleImgUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();

    imageData.set("key", "5c1ff4f91c14ad66771d66d3298e5026");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageUrl(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const handelEvent= () => {
    swal({
      title: "new event!",
      text: "You added new event!",
      icon: "success",
    });
  }

 

  return (
    <container className="mt-5">
      <div className="text-center">
        <h1> Add your new Events </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input placeholder="name" {...register("name", { required: true })} />
          <br></br>
          <br></br>
          <input
            placeholder="price"
            {...register("price", { required: true })}
          />
          <br></br>
          <br></br>
          <input type="file" onChange={handleImgUpload} />
          <br></br>
          <br></br>
          <input onClick={handelEvent} type="submit" />
        </form>
      </div>
    </container>
  );
};

export default AddEvents;
