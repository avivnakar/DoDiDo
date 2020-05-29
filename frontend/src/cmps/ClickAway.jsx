import React from "react"
export function ClickAway(props) {
    // console.log(props);
    
    const { className } = props
    return <section  {...props}
        className={`screen flex justify-center${
            className ? ' ' + className : ''
            }${props.invisible ? ' invisible' : ''}`}>
        {props.children}
    </section>
}
