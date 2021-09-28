function SingleCard(props) {
  return (
    <div className="card">
      <div
        className="cover"
        style={{
          background: `url('${
            props?.data?.album_cover?.name
              ? URL?.createObjectURL(props?.data?.album_cover)
              : props?.data?.album_cover
          }')no-repeat center,linear-gradient(#141e30,#243b55)`,
        }}
      >
        {/* {props?.type !== "single" && (
          <div className="cover__text">
            <h1 className="title">Test1</h1>
            <h4 className="subTitle">test2</h4>
          </div>
        )} */}

        <div className="playButtonWrap">
          <button className="playButton">&#x25BA;</button>
        </div>
      </div>
      <div className="description">
        <h1 className="name">{props?.data?.album_title || "--"}</h1>
        <div className="card_down">
          <p className="desc">{props?.data?.artist || "--"}</p>
          <img
            src="/delete.svg"
            height={30}
            alt="del"
            className="src"
            onClick={() => props?.delete(props?.data?.id)}
          />
        </div>
      </div>
    </div>
  );
}

export default SingleCard;
