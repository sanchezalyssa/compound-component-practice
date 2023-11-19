import "./App.css"
import Menu from "./components/Menu"

function App() {
    return (
        <>
            <Menu>
                <Menu.Button>Menu</Menu.Button>
                <Menu.Dropdown>
                    <Menu.Item>Contact</Menu.Item>
                    <Menu.Item>About</Menu.Item>
                </Menu.Dropdown>
            </Menu>
        </>
    )
}

export default App
