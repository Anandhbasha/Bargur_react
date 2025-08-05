// import React from 'react'

// const Button = ({value}) => {
//   return (
//     <div className='Button'>
//         <button>{value}</button>
//     </div>
//   )
// }

// export default Button
import React from 'react'

const Button = (props) => {
  return (
    <div className='Button'>
        <button>{props.value}</button>
    </div>
  )
}

export default Button