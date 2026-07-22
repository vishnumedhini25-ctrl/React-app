import propTypes from 'prop-types'
function Course(props){
        return(
        <div className="card">
            <img src={props.image} rel=""></img>
            <h3>{props.name}</h3>
            <p>{props.price}</p>

        </div>
        )

    }
Course.propTypes = {
    name : propTypes.string,
    show : propTypes.bool
}

export default Course