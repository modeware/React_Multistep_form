const ComponentRenderer = ({components,  ...props}) => {
        return (
            <div style={{display: "grid", gridAutoFlow:'column'}}>
                  {components.map(({Component, onClick, identifier, ...rest}, index)=>{       
                    return <Component key={index + identifier} 
                                onClick={(e)=>props.onSelect(identifier, props.step)}
                                identifier={identifier}
                               {...props}
                               {...rest}                      
                    />
                  }
                  )}
            </div>
        )
    }
    
    export default ComponentRenderer;