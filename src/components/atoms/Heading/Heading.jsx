import React from 'react';
import "./Heading.css"

function Heading({type="h2", value}) {

    if (type === 'h2') {
        return <h2>{value}</h2>;
    } else if (type === 'h3'){
        return <h3>{value}</h3>;
    } else {
        return <h5>{value}</h5>;
    }
}

export default Heading;