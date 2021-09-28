// import axios from "axios";
import { useState } from "react";

function AddAlbum(props) {
  const [data, setdata] = useState({
    album_title: "",
    artist: "",
    album_cover: null,
  });
  const handleFieldChange = (e) => {
    const temp = { ...data };
    if (e.target.type === "file") {
      temp[e.target.name] = e.target.files[0];
    } else temp[e.target.name] = e.target.value;
    setdata(temp);
  };
  // const imageUpload = async () => {
  //   let uploadData = new FormData();
  //   uploadData.append("title", data?.album_title);
  //   uploadData.append("image", data?.album_cover);
  //   let response = await axios({
  //     method: "post",
  //     url: "https://api.imgur.com/3/upload",
  //     headers: {
  //       Authorization: "Client-ID b650d94d86ca32d",
  //     },
  //     data: uploadData,
  //   });
  //   console.log("image upload", response);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("mama", { ...data, id: props?.newId });
    // imageUpload();
    props?.handleAdd({
      ...data,
      id: props?.newId,
    });
    setdata({
      album_title: "",
      artist: "",
      album_cover: null,
    });
  };
  return (
    <div className="AddAlbum">
      <h1 className="formHeader">Add Album Here</h1>
      <form className="form">
        <div className="form_left">
          <label className="fileUpload">
            <input
              type="file"
              id="image"
              name="album_cover"
              hidden
              accept="image/*"
              multiple={false}
              onChange={handleFieldChange}
              style={{
                display: "none",
              }}
            />
            <div>
              <img
                src={
                  data?.album_cover
                    ? URL?.createObjectURL(data?.album_cover)
                    : "/noAlbumCover.png"
                }
                alt=""
                style={{
                  maxWidth: "100%",
                  maxHeight: "200px",
                }}
              />
            </div>
            <br />
            <div className="image__bottom">
              {data?.album_cover === null ? (
                <span className="image_upload_text">Upload Album Cover</span>
              ) : (
                <span className="image_upload_text">Change Album Cover</span>
              )}
            </div>
          </label>
        </div>
        <div className="form_right">
          <div>
            <input
              type="text"
              className="form__field"
              name="album_title"
              placeholder="Enter Album title"
              value={data?.album_title}
              onChange={handleFieldChange}
            />
            <button
              type="button"
              className="btn btn--primary btn--inside uppercase"
              disabled
            >
              Album title
            </button>
          </div>
          <div>
            <input
              type="text"
              className="form__field"
              name="artist"
              placeholder="Enter Artist name"
              value={data?.artist}
              onChange={handleFieldChange}
            />
            <button
              type="button"
              className="btn btn--primary btn--inside uppercase"
              disabled
            >
              Artist
            </button>
          </div>
          <div className="Button_Container" onClick={handleSubmit}>
            <button className="btn-pill">Add Album</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddAlbum;
