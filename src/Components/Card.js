import React from 'react'

const Card = ({cardTitle,cardDescription,buttonText,imageSource}) => {
   return(
    <div className="col-4">
    <div className="card" style={{width: "18 rem"}}>
      <img src ={imageSource} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{cardTitle}</h5>
        <p className="card-text">
          {cardDescription}
        </p>
        <a href="#" className="btn btn-success">{buttonText}</a>
      </div>
    </div>
  </div>
   )
}

export default Card 