import React  from 'react';

const InputContainer = ({components, style, ...props}) => {
    return (
        <div style={{...style}}>
              {components.map(({Component, ...rest}, index)=>{
                return React.cloneElement(Component, {key:index, ...props, ...rest})
              }
              )}
        </div>
    )
}

export default InputContainer;