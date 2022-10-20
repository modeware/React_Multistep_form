import './circle.css'

const Circle = ({text, ...props}) => {

    return <div className="dot" {...props}>
        {text}
    </div>

}

export default Circle