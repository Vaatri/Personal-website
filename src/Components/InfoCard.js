import { Card } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const InfoCard = ({children, redirect}) => {
    
    return (<Card>
        <div>
            {children}
        {/* <Link onClick={redirect} component="button">Find out more</Link> */}
        </div>
    </Card>) 
}

export default InfoCard;