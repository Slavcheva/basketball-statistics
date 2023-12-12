import React from 'react';
import "./Heading.css"

function Heading({type="h2", value}) {

    if (type === 'h2') {
        return <h2>{value}</h2>;
    }

    return <h3>{value}</h3>;

}

export default Heading;