
export const Navigation = () => {
    return (
        <nav className="row navbar navbar-expand-lg navbar-light">
            <a href="#banner" className="navbar-brand">
                <h1>Logo</h1>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse flex-row-reverse" id="navbarContent">
                <div className="navbar-nav">
                    <a href="#banner">
                        <span className="nav-item">Home</span>
                    </a>
                    <a href="#aboutus">
                    <span className="nav-item">About Us</span>
                    </a>
                    <a href="#ourimapcts">
                    <span className="nav-item">Our Impacts</span>
                    </a>
                    <a href="#footer">
                    <span className="nav-item">Conatacts</span>
                    </a>
                </div>
            </div>
        </nav>
    )
}