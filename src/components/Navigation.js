
export const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <a href="#banner" className="navbar-brand">Logo</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#Content" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="Content">
                <div className="navbar-nav">
                    <div className=""><a href="#banner" className="nav-item active">Home</a></div>
                    <div ><a href="#banner" className="nav-item">About Us</a></div>
                    <div><a href="#banner"  className="nav-item">Our Impacts</a></div>
                    <div ><a href="#banner" className="nav-item">Conatacts</a></div>
                </div>
            </div>
        </nav>
    )
}