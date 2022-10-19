import React, { useState } from "react";
const UpImage = () => {
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const uploadImage = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "tvoyiros");
    data.append("cloud_name", "dz4enslok");
    fetch("  https://api.cloudinary.com/v1_1/dz4enslok/image/upload", {
      method: "post",
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        setUrl(data.url);
      })
      .catch((err) => console.log(err));
  };

  console.log(url);

  return (
    <div>
      <div>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        ></input>
        <br />
        <button onClick={uploadImage}>Upload</button>
      </div>
      <br />
      <div>
        <h1>Uploaded image will be displayed here</h1>
        <img src={url} />
      </div>
    </div>
  );
};
export default UpImage;
