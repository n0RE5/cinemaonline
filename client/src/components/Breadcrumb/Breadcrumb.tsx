import React from 'react';
import classes from './Breadcrumb.module.scss';
import { IBreadcrumb } from '../../types/Interfaces';
import { Link } from 'react-router-dom';
import { DefaultRoute } from '../../tools/Consts';

interface BreadcrumbProps {
    breadcrumbs: IBreadcrumb[]
}

/* Creates breadcrumbs in order (FILMPRO > obj1 > obj2 > etc...) */

const Breadcrumb: React.FC<BreadcrumbProps> = ({ breadcrumbs }) => {
    return (
        <div className={classes.breadcrumb}>
            <Link to={DefaultRoute} className={classes.breadcrumb__text}>FILMPRO</Link>
            {breadcrumbs.map((breadcrumb, index) =>
                breadcrumb.href  
                ? <Link key={index} className={classes.breadcrumb__link} to={breadcrumb.href}>
                    <span> » {breadcrumb.title}</span>
                  </Link>
                : <span key={index}> » {breadcrumb.title}</span>  
            )}
        </div>
    );
}
 
export default Breadcrumb;