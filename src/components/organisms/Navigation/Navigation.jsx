import {NavLink} from "react-router-dom";
import "./Navigation.css"

function Navigation() {
    return (
        <nav className="nav-links">
            <ul className="nav-links">
                <NavLink to="/general-statistic" className={({isActive}) => (isActive ? "link-active" : "link")}>
                    All Players
                </NavLink>
                <NavLink to="/most-points" className={({isActive}) => (isActive ? "link-active" : "link")}>
                   Best Player in a Game
                </NavLink>
                <NavLink to="/most-points-in-all-games" className={({isActive}) => (isActive ? "link-active" : "link")}>
                    Best Player in All Game
                </NavLink>
                <NavLink to="/most-points-by-time" className={({isActive}) => (isActive ? "link-active" : "link")}>
                    Best Player in a Game per Time
                </NavLink>
                <NavLink to="/most-team-points" className={({isActive}) => (isActive ? "link-active" : "link")}>
                    Top Teams
                </NavLink>
                <NavLink to="/most-points-by-team" className={({isActive}) => (isActive ? "link-active" : "link")}>
                    Best Player in Each Team
                </NavLink>

            </ul>
        </nav>
    )
}

export default Navigation;