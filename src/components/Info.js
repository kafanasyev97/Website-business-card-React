import React, { useState, useEffect } from "react";

const Info = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = "./images/kirill2-transformed.png";
    image.onload = () => {
      setImageLoaded(true);
    };
  }, []);
  return (
    <section className="main__section">
      <div className="container">
        <div className="info">
          {!imageLoaded && (
            <div
              style={{ position: "relative", width: "585px", height: "700px" }}
            ></div>
          )}
          <div className="info__img">
            <img
              src="./images/kirill2-transformed.png"
              alt="img"
              className="info__img-main"
              rel="image"
              style={{ display: imageLoaded ? "block" : "none" }}
            />
          </div>
          <div className="info__text">
            <h2 className="info__name">Kirill Afanasyev</h2>
            <h3 className="info__title">
              Developer with more than 1 year experience. Stack:
            </h3>
            <span className="info__main">- JavaScript (React, HTML + CSS)</span>
            <span className="info__main">- Python (Django, FastApi)</span>
            <span className="info__main">- SQL</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;