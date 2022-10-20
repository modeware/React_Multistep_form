const level = (props, style) => {
    switch(props.level){
        case 0: return <p   {...props} style={{...style}}>{props.children}</p>
        case 1: return <h1  {...props} style={{...style}}>{props.children}</h1>
        case 2: return <h2  {...props} style={{...style}}>{props.children}</h2>
        case 3: return <h3  {...props} style={{...style}}>{props.children}</h3>
        case 4: return <h4  {...props} style={{...style}}>{props.children}</h4>
        case 5: return <h5  {...props} style={{...style}}>{props.children}</h5>
        default:  return <span {...props} style={{...style}}>{props.children}</span>
    }
}


export default level;