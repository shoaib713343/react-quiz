function FinishedScreen({points, maxPossiblePoints}) {
    const percentage = (points / maxPossiblePoints) * 100;
    return (
        <p className="result">
            You scored <strong>{points}</strong> out of
            {maxPossiblePoints} ({percentage.toFixed(2)}%)
        </p>
    )
}

export default FinishedScreen
