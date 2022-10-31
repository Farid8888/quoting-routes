import {Prompt} from 'react-router-dom'
import {Fragment} from 'react'




const PromtQuotes =(props)=>{
    console.log('dsd')
    return(
        <Fragment>
            <Prompt
            when ={props.isEntering}
            message ={(location)=>
                'Are you sure you want to leave? All your entered data will be lost!'
            }
            />
       <div>{props.children}</div>
       </Fragment>
    )
}

export default PromtQuotes