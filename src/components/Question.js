import Options from "./Options";
function Question({question, dispatch, answer}) {
    console.log(question);
    
    return (
        <div>
            <h2>{question.question}</h2>
            <div className="options">
                {question.options.map((option) => (
                    <Options option={option} dispatch={dispatch} answer={answer}/>
                ))}
            </div>
        </div>
    )
}

export default Question
