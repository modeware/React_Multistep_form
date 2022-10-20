import React from 'react';

const CustomComponent = ({Component, ...props}) => {

    return React.cloneElement(Component, {...props})
    

}


export default CustomComponent;