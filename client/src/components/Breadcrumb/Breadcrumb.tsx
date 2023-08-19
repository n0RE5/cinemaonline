import React from 'react';
import classes from './Breadcrumb.module.scss';
import { IBreadcrumb } from '../../types/Interfaces';
import { Link } from 'react-router-dom';

interface BreadcrumbProps {
    breadcrumbs: IBreadcrumb[]
}

/* Creates breadcrumbs in order (FILMPRO > obj1 > obj2 > etc...) */

const Breadcrumb: React.FC<BreadcrumbProps> = ({ breadcrumbs }) => {
    return (
        <div className={classes.breadcrumb}>
            <span className={classes.breadcrumb__text}>FILMPRO</span>
            {breadcrumbs.map((breadcrumb, index) =>
                breadcrumb.href  
                ? <Link className={classes.breadcrumb__link} to={breadcrumb.href}>
                    <span key={index}> » {breadcrumb.title}</span>
                  </Link>
                : <span key={index}> » {breadcrumb.title}</span>  
            )}
        </div>
    );
}
 
export default Breadcrumb;