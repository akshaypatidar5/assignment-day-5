import React from 'react'
import Card from './Card'
const CardSection=()=>{
    return(
        <section className="contact bg-success ">
        <div className="container ">
          <h2 className="text-white">
            We love new friends!
          </h2>
          <div className="row">
              <Card cardTitle = "Orange" cardDescription="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable." buttonText="Apple" imageSource={require=('/images/orange.png')} />
              <Card cardTitle = "Guava" cardDescription="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable." buttonText="Pear" imageSource={require=('/images/guava.jpg')}/>
              <Card cardTitle = "Mango" cardDescription="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable." buttonText="pineapple" imageSource={require=('/images/mango.jpg')}/>
            
            </div>
          </div>
        
      </section>
    )
}
export default CardSection 