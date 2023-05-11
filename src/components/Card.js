import './Card.css';
function Card(props){
    const classes='çard '+props.className;
    return <div className={classes}>{props.children}</div>
}

export default Card;  