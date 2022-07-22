const FooterLayout=()=>{
    return(
        <footer className=" row row-cols-1 py-5 bg-dark text-light ">
            <div className="col d-flex  flex-column flex-md-row border-bottom justify-content-around align-items-sm-start">
                <ul className="nav d-flex flex-column  justify-content-around pb-3 mb-3">
                    <li>.HOME</li>
                    <li>.FAQS</li>
                    <li>.REDES</li>
                    <li>.CONTACTO</li>
                    <li>.RECURSOS</li>
                </ul>
                <div className="nav d-flex justify-content-around  pb-3 mb-3">
                    <form>
                        <h5>Subscribe to our newsletter</h5>
                        <p>Monthly digest of what's new and exciting from us.</p>
                        <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                            <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                            <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
                            <button className="btn btn-warning" type="button">Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
            <p className="col text-center text-light pt-3">© 2022 Company, Inc</p>
        </footer>
    )
}
export default FooterLayout
