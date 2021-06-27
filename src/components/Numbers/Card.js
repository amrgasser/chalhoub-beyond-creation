import React from 'react'
import {CardContainer} from './NumbersElements'
import C750k from '../../images/750k.png'

const Card = ({number}) => {
    return (
        <CardContainer>
            <img src={C750k} style={{height:'80%'}} />
        </CardContainer>
    )
}

export default Card
