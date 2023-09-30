import './Card.css';
const Card=(props)=>{
    const classes='çard '+props.className;
    return <div className={classes}>{props.children}</div>
}

export default Card;  