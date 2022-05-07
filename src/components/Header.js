import React, { Fragment } from 'react'

const Header = ({ titulo }) => (
    <Fragment>
        <h1>{titulo}</h1>
    </Fragment>
);


export default Header;

// function Header({ titulo }) {

//     return (
//         <Fragment>
//             <h1>{titulo}</h1>
//         </Fragment>
//     )
// }