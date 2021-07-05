import {Link} from 'react-router-dom'

export const Navigation = () => {
    return (
        <nav className="row navbar navbar-expand-lg navbar-light my_navbar">
            <Link exact to='/' className="navbar-brand">
                <h1>Logo</h1>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse flex-row-reverse" id="navbarContent">
                <div className="navbar-nav">
                    <Link exact to='/' className="nav-item active">Home</Link>
                    <Link exact to='/' className="nav-item">About Us</Link>
                    <Link exact to='/' className="nav-item">Our Impacts</Link>
                    <Link exact to='/' className="nav-item">Conatacts</Link>
                </div>
            </div>
        </nav>
    )
}