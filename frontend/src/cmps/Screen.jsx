import React from "react"
export function Screen(props) {

    return <section className="screen flex justify-center" {...props}>
        {props.children}
    </section>
}
