import {NavLink} from "react-router-dom";
import "./Navigation.css"

function Navigation() {
    return (
        <nav className="nav-links">
            <ul className="nav-links">
                <NavLink to="/" className={({isActive}) => (isActive ? "link-active" : "link")}>
                    All Players
                </NavLink>
                <NavLink to="/most-points-in-game" className={({isActive}) => (isActive ? "link-active" : "link")}>
                    Top Players in a Game
                </NavLink>
                <NavLink to="/most-points-in-all-games" className={({isActive}) => (isActive ? "link-active" : "link")}>
                    Top Players in All Games
                </NavLink>
                <NavLink to="/most-points-by-time" className={({isActive}) => (isActive ? "link-active" : "link")}>
                    Top Players per Time in a Game
                </NavLink>
                <NavLink to="/most-team-points" className={({isActive}) => (isActive ? "link-active" : "link")}>
                    Top Teams
                </NavLink>
                <NavLink to="/most-players-points-by-team" className={({isActive}) => (isActive ? "link-active" : "link")}>
                    Top Players in Each Team
                </NavLink>

            </ul>
        </nav>
    )
}

export default Navigation;