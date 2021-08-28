import React from 'react'
import { useState } from 'react'
import { Proudit } from './Data'
import ModelCard from './ModelCard'

const ModelList = () => {
    const [chabeb, setChabeb] = useState(Proudit)
    return (
        <div>
            {chabeb.map((el,i)=>(
                <ModelCard student={el} key={i}/>
            )
            )}
        </div>
    )
}

export default ModelList
