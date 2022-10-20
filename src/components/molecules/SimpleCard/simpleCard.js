import './simpleCard.css';

const SimpleCard = ({icon, header, description,style,  ...props}) => {
    console.log("a",props)
    return (
    <div style={{borderColor: props &&  props.value ? '#664de5': 'lightgray', ...style}} className={'card'} {...props}>
        <div className={'card-icon'}>
            {<img src={icon} height='40px' width='40px' alt='icon'/>}
        </div>
        <div className={'card-header'}>
            <p>{header}</p>
        </div>
        <div className={'card-description'}>
            <p>{description}</p>
        </div>
    </div>
    )
}

export default SimpleCard;