import './index.css'

const Input = (props) =>{
    return <input className={'base-input'} {...props}/>
}


export const InputWithLabel = ({label, ...props}) => {
    return  <div>
                <label className={'input-label'}>{label}</label>
                <Input {...props}/>
            </div>        
}


export const InputWithLabelLeft = ({label, ...props}) => {
    return  <div>
                <label>{label}</label>
                <Input  {...props}/>
            </div>        
}


export default Input;