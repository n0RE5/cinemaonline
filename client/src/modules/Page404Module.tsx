import React from 'react';
import { Link } from 'react-router-dom';
import { DefaultRoute } from '../tools/Consts';
import classes from './Page404.module.scss'; 

const Page404Module = () => {
    return (
        <div className={classes.p404}>
            <h1 className={classes.p404_title}>404!</h1>
            <div className={classes.p404_text}>Страницы не существует, попробуйте вернуться на <Link to={DefaultRoute}>главную</Link> или изменить параметры запроса</div>
        </div>
    );
}
 
export default Page404Module;