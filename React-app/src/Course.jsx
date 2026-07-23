import propTypes from 'prop-types'
import { useState } from 'react'



function Course(props){
    const [purchase,setpurchase] = useState(false)

    function BuyCourse(Discount){
        console.log(props.name,"Purchased",Discount,"%Discount")
        setpurchase(true)
        console.log(purchase)
    }
        return(
        <div className="card">
            <img src={props.image} rel=""></img>
            <h3>{props.name}</h3>
            <p>{props.price}</p>
            <button onClick={()=>BuyCourse(10)}>Buy Now</button>
            <p>
                {purchase ? "Already Purchase" : "Get It Now"}
            </p>

        </div>
        )

    }
Course.propTypes = {
    name : propTypes.string,
    show : propTypes.bool
}

export default Course