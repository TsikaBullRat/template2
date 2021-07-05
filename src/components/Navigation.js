
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
                    <a href="#banner" className="nav-item  active">Home</a>
                    <a href="#aboutus" className="nav-item">About Us</a>
                    <a href="#ourimapcts" className="nav-item">Our Impacts</a>
                    <a href="#footer" className="nav-item">Conatacts</a>
                </div>
            </div>
        </nav>
    )
}