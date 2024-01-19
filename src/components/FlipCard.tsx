export function FlipCard({nl, en}) {
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <p>{nl}</p>
                </div>
                <div className="flip-card-back">
                    <p>{en}</p>
                </div>
            </div>
        </div>
    );
}
