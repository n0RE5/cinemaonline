import React, { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import { IBreadcrumb } from '../types/Interfaces';
import classes from './CopyrightPage.module.scss';
 
const CopyrightPageModule = () => {
    const [breadcrumbs] = useState<IBreadcrumb[]>([
        {
            title: "Правообладателям"
        }
    ])
    
    return (
        <div>
            <Breadcrumb breadcrumbs={breadcrumbs} />
            <div className={classes.copyright}>
                <h1 className={classes.copyright__title}>Правообладателям</h1>
                <div className={classes.copyright__text}>Весь материал на сайте представлен исключительно для домашнего ознакомительного просмотра.</div>
            </div>
        </div>
    );
}
 
export default CopyrightPageModule;