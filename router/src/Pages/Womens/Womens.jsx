import React from 'react'
import Card from '../../Components/Card/Card'
import Sari1 from '../../assets/images/sari1.jpg'
import Saree2 from '../../assets/images/saree2.jpg'
import Saree3 from '../../assets/images/saree3.jpg'
import Saree4 from '../../assets/images/saree4.avif'
import Saree5 from '../../assets/images/saree5.webp'
import Saree6 from '../../assets/images/saree6.jpeg'
import Saree7 from '../../assets/images/saree7.jpeg'
import Saree8 from '../../assets/images/saree8.webp'
import Saree9 from '../../assets/images/saree9.webp'
import Saree10 from '../../assets/images/saree10.webp'

const Womens = () => {
  const Womens = [
    { 
      prodCat:"Womens",
      productName: "Classic Silk Saree",
      productPrice: "Rs: 1500",
      productDesrc: "Elegantly designed with traditional motifs, this silk saree is perfect for weddings and festivals.",
      image: Sari1
    },
    {
      prodCat:"Womens",
      productName: "Georgette Saree",
      productPrice: "Rs: 1200",
      productDesrc: "Flowy and lightweight, this georgette saree offers a graceful drape, ideal for evening parties.",
      image: Saree2
    },
    {
      prodCat:"Womens",
      productName: "Banarasi Silk Saree",
      productPrice: "Rs: 5000",
      productDesrc: "A luxurious Banarasi silk saree with intricate gold patterns, a timeless choice for formal events.",
      image: Saree3
    },
    {
      prodCat:"Womens",
      productName: "Kanjivaram Saree",
      productPrice: "Rs: 8000",
      productDesrc: "This Kanjivaram saree features rich zari work, making it a magnificent piece for traditional ceremonies.",
      image: Saree4
    },
    {
      prodCat:"Womens",
      productName: "Cotton Saree",
      productPrice: "Rs: 700",
      productDesrc: "Lightweight and breathable, this cotton saree is perfect for daily wear, offering comfort and elegance.",
      image: Saree5
    },
    {
      prodCat:"Womens",
      productName: "Chiffon Saree",
      productPrice: "Rs: 1300",
      productDesrc: "This chiffon saree flows beautifully with a soft and delicate feel, ideal for casual parties and get-togethers.",
      image: Saree6
    },
    {
      prodCat:"Womens",
      productName: "Linen Saree",
      productPrice: "Rs: 1100",
      productDesrc: "Made with premium linen, this saree offers a modern and minimalistic design with a luxurious feel.",
      image: Saree7
    },
    {
      prodCat:"Womens",
      productName: "Embroidered Saree",
      productPrice: "Rs: 2200",
      productDesrc: "Intricate embroidery work makes this saree a perfect choice for weddings and grand celebrations.",
      image: Saree8
    },
    {
      prodCat:"Womens",
      productName: "Net Saree",
      productPrice: "Rs: 1500",
      productDesrc: "A contemporary net saree with stunning embellishments, ideal for evening events and cocktail parties.",
      image: Saree9
    },
    {
      prodCat:"Womens",
      productName: "Patola Silk Saree",
      productPrice: "Rs: 6000",
      productDesrc: "A stunning Patola silk saree with geometric patterns, known for its rich texture and vibrant colors.",
      image: Saree10
    }
  ];
  return (
    <div className='Womens'>
      {Womens.map((item)=>(
        <Card {...item}/>
      ))}
    </div>
  )
}

export default Womens