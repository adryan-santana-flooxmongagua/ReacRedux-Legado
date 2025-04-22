import React from "react";

function childrenWithprops(childre, props){
    return  React.Children.map(props.children,
                child => React.cloneElement(child,{...props}))
}

export {childrenWithprops}