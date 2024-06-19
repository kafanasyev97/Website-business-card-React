import React, { useState } from 'react'

const Info = () => {
  const [imageLoaded, setImageLoaded] = useState(false)

  const handleImageLoad = () => {
    setImageLoaded(true)
  }

  return (
    <section className="main__section">
      <div className="container">
        <div className={imageLoaded ? 'info' : 'none__display'}>
          <div className="info__img">
            <img
              src="/images/kirill2-transformed.png"
              alt="img"
              className="info__img-main"
              onLoad={handleImageLoad}
            />
          </div>
          <div className="info__text">
            <div>
              <h2 className="info__name">Kirill Afanasyev</h2>
            </div>
            <div className="info__main-info">
              <h3 className="info__title">
                Developer with more than 1 year experience. Stack:
              </h3>
              <span className="info__main">
                - JavaScript (React, HTML + CSS)
              </span>
              <span className="info__main">- TypeScript</span>
              <span className="info__main">- Python (Django, FastApi)</span>
              <span className="info__main">- SQL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info
