export function Button({handleClick, children}) {
    return (
        <button className="btn" onClick={handleClick}>{children}</button>
    );
}
