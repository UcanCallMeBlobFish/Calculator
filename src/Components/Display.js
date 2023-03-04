const Display = (props) => {
    return (  
        <div>
            <span>{props.value || "0"} ({props.result})</span>
            <br/>
        </div>
    );
}
 
export default Display;