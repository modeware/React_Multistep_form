const Image = ({source, alt,  style, ...props}) => {

    return <img src={source} alt={alt} {...style} {...props}/>

}

export default Image;