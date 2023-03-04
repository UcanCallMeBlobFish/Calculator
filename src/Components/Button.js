import style from './style.css'

const Button = (props) => {
    const ops = ['-', '+', '*', '/']

    function HandleClick(value) {

        if (
            ops.includes(value) && props.calc === '' ||
            ops.includes(value) && ops.includes(props.calc.slice(-1))
        ) {
            return
        }
        props.setCalc(props.calc + value)

        if (!ops.includes(value)) {
            const tmp = eval(props.calc + value).toString()
             props.setResult(tmp)

        }


    }

    return (
        <div className="button">
            <button className="sht" onClick={() => HandleClick(props.num)}>{props.num}</button>
        </div>
        

    );
}

export default Button;