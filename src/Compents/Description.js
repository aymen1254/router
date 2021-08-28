import React from 'react'

const Description = (props) => {
    console.log(props)
    const product = props.Proudit.find((el=>el.id === Number(props.match.params.id)))
    console.log(product)
    return (
        <div>
            <p>  {product.name}  </p>
        </div>
    )
}

export default Description

