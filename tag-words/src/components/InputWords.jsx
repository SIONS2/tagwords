import "./InputWords.css";
import { useState, useRef } from "react";

const InputWords = () => {
    // 각 글자 값을 받아오는 함수
    const [first_word, setFristWord] = useState('');
    const [middle_word, setMiddleWord] = useState('');
    const [last_word, setLastWord] = useState('');

    const saveFirstWord = (event) => {
        setFristWord(event.target.value);
        return inputMiddle.current.focus();
    }
    const saveMiddleWord = (event) => {
        setMiddleWord(event.target.value);
        return inputLast.current.focus();
    }
    const saveLastWorld = (event) => {
        setLastWord(event.target.value);
    }

    // 각 글자가 입력되면 다음 인풋으로 자동 포커스
    const inputMiddle = useRef(null);
    const inputLast = useRef(null);



    return(
        <div className="InputWords">
            <div>입</div>
            <div>력</div>
            <div>:</div>
            <div>
                <input 
                    type="text" 
                    maxLength={1}
                    value={first_word}
                    onChange={saveFirstWord}
                    />
            </div>
            <div>
                <input 
                    type="text" 
                    maxLength={1}
                    value={middle_word}
                    onChange={saveMiddleWord}
                    ref={inputMiddle}
                    />
            </div>
            <div>
                <input 
                    type="text"
                    maxLength={1}
                    value={last_word}
                    onChange={saveLastWorld}
                    ref={inputLast}
                    />
            </div>
        </div>
    )
}

export default InputWords;