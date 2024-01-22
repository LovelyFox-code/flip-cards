export function Input({label, value, onHandleChange}) {


    return (
        <>
            <label className="input-group__label" htmlFor="myInput">{label}</label>
            <input
                type="text"
                id="myInput"
                className="input-group__input"
                value={value}
                onChange={(e) => onHandleChange(e.target.value)}
            />
        </>
    );
}
