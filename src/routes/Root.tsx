import {Outlet} from "react-router-dom";

export function Root() {
    return (
        <div className="container">
            <nav>
                <ul>
                    <li>
                        <a href={`/cards`}>Flip Cards</a>
                    </li>
                    <li>
                        <a href={`/quiz`}>Quiz</a>
                    </li>
                </ul>
            </nav>
            <div id="detail">
                <Outlet/>
            </div>
        </div>
    );
}
