import './style.css';

const Button = ({title, ...props}) => {
    return (
            <button className={'base-button'} {...props}>
                {title}
            </button>
            )
}

export default Button;