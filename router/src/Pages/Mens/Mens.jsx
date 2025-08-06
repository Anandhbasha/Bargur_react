import React from 'react'
import Card from '../../Components/Card/Card'
import Shirt1 from '../../assets/images/shirt1.webp' 
import Shirt2 from '../../assets/images/shirt2.avif' 
import Shirt3 from '../../assets/images/shirt3.webp' 
import Shirt4 from '../../assets/images/shirt4.avif' 
import Shirt5 from '../../assets/images/shirt5.webp' 
import Shirt6 from '../../assets/images/shirt6.jpg' 
import Shirt7 from '../../assets/images/shirt7.avif' 
import Shirt8 from '../../assets/images/shirt8.webp' 
import Shirt9 from '../../assets/images/shirt9.webp' 
import Shirt10 from '../../assets/images/shirt10.webp'

const Mens = () => {
  const Mens = [
    {
      prodCat:"Mens",
      productName: "Classic Shirt",
      productPrice: "Rs: 750",
      productDesrc: "Soft, breathable cotton with classic stripes that add a touch of sophistication to any outfit.",
      image: Shirt1
    },
    {
      prodCat:"Mens",
      productName: "Flannel Button-Down Shirt",
      productPrice: "Rs: 750",
      productDesrc: "Cozy and warm, this flannel shirt is perfect for cooler weather with a classic plaid pattern.",
      image: Shirt2
    },
    {
      prodCat:"Mens",
      productName: "Button-Down Shirt with Pocket",
      productPrice: "Rs: 700",
      productDesrc: "A classic button-down shirt featuring a chest pocket for added functionality and style.",
      image: Shirt3
    },
    {
      prodCat:"Mens",
      productName: "Embroidered Shirt",
      productPrice: "Rs: 950",
      productDesrc: "A stylish shirt with intricate embroidery that adds an elegant touch to casual wear.",
      image: Shirt4
    },
    {
      prodCat:"Mens",
      productName: "Hooded Shirt",
      productPrice: "Rs: 800",
      productDesrc: "Combining the comfort of a hoodie with the style of a shirt, perfect for a casual yet cozy look.",
      image: Shirt5
    },
    {
      prodCat:"Mens",
      productName: "Long Sleeve Button-Down Shirt",
      productPrice: "Rs: 900",
      productDesrc: "A versatile shirt suitable for any occasion, from work to weekend outings.",
      image: Shirt6
    },
    {
      prodCat:"Mens",
      productName: "Sheer Silk Shirt",
      productPrice: "Rs: 1200",
      productDesrc: "A luxurious and elegant sheer silk shirt that adds sophistication to any outfit.",
      image: Shirt7
    },
    {
      prodCat:"Mens",
      productName: "Checked Flannel Shirt",
      productPrice: "Rs: 850",
      productDesrc: "A stylish, warm flannel shirt with a timeless checked pattern, perfect for layering.",
      image: Shirt8
    },
    {
      prodCat:"Mens",
      productName: "Casual Chambray Shirt",
      productPrice: "Rs: 700",
      productDesrc: "A light and comfortable chambray shirt that's perfect for warm weather or a laid-back casual look.",
      image: Shirt9
    },
    {
      prodCat:"Mens",
      productName: "Rugged Utility Shirt",
      productPrice: "Rs: 950",
      productDesrc: "A durable, utility-style shirt with multiple pockets for functionality and a stylish rugged look.",
      image: Shirt10
    }
  ];
  return (
    <div className='Mens'>
      {Mens.map((item)=>(
        <Card {...item}/>
      ))}
    </div>
  )
}

export default Mens