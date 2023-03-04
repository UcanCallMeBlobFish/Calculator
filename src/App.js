import style from './Components/style.css'

import { useState } from "react";
import Button from "./Components/Button";
import Display from "./Components/Display";
const App = () => {

  const [calc, setCalc] = useState("")
  const [result, setResult] = useState("0")

  return (

    <div className='calculator'> 

      <div className="display">
        <Display value={calc} result={result} />
      </div>

      <div className="digits">
        <Button num={"1"} setCalc={setCalc} calc={calc} result={result} setResult={setResult} />
        <Button num={"2"} setCalc={setCalc} calc={calc} result={result} setResult={setResult} />
        <Button num={"3"} setCalc={setCalc} calc={calc} result={result} setResult={setResult} />
        <Button num={"4"} setCalc={setCalc} calc={calc} result={result} setResult={setResult} />
        <Button num={"5"} setCalc={setCalc} calc={calc} result={result} setResult={setResult} />
        <Button num={"6"} setCalc={setCalc} calc={calc} result={result} setResult={setResult} />
        <Button num={"7"} setCalc={setCalc} calc={calc} result={result} setResult={setResult} />
        <Button num={"8"} setCalc={setCalc} calc={calc} result={result} setResult={setResult} />
        <Button num={"9"} setCalc={setCalc} calc={calc} result={result} setResult={setResult} />
        <Button num={"0"} setCalc={setCalc} calc={calc} result={result} setResult={setResult} />
      </div>
      <div className="operations">
        <Button num="-" setCalc={setCalc} calc={calc} result={result} setResult={setResult} />
        <Button num="+" setCalc={setCalc} calc={calc} result={result} setResult={setResult} />
        <Button num="*" setCalc={setCalc} calc={calc} result={result} setResult={setResult} />
        <Button num="/" setCalc={setCalc} calc={calc} result={result} setResult={setResult} />
      </div>


    </div>




  );
}

export default App;