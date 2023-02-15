import logo89 from './logo89.jpg'
function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-warning">
            <div className="container-fluid">
                <a className="navbar-brand text-primary" href="/"><img src={logo89} alt="logo" style={{ width: '50px', height: '50px' }} /> <span>  </span>
                    fun forum
                </a>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <a href='/signin' style={{ padding: '5px', color: 'white', }}>Login</a >
                    <a href='/signup' style={{ padding: '5px', color: 'white', }}>Sign Up</a>
                </div>
            </div>
        </nav>
    )
}

export default Header