import "./ContentWrap.css";
import ChatLog from "./ChatLog";
import InputWords from "./InputWords";

const ContentWrap = () => {
    return(
        <div className="ContentWrap">
            <div className="game_title">
                <div></div>
                <div>&lt;</div>
                <div>끝</div>
                <div>말</div>
                <div>잇</div>
                <div>기</div>
                <div>&gt;</div>
            </div>
            <ChatLog />
            <InputWords />
        </div>
    )
}

export default ContentWrap;