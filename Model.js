import {Fragment} from 'react';
import  ReactDOM  from 'react-dom';
import classes from './Model.module.css';

const ModelOverlay=(props)=>{
    return(
        <div>
            <div>{props.children}</div>
        </div>
    )
}
const overlayElement=document.getElementById('Modeloverlay');
const Model=props=>{
    return(<Fragment>
        {ReactDOM.createPortal(<ModelOverlay>{props.children}</ModelOverlay>,overlayElement)}
    </Fragment>
    )
}
export default Model;