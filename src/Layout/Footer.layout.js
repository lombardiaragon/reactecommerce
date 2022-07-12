const FooterLayout=()=>{
    return(
        <footer className="FooterLayout py-3 mt-4 bg-dark text-white">
            <ul className="FooterLayout__list nav d-flex justify-content-around border-bottom pb-3 mb-3">
                <li className="FooterLayout__list__link">HOME</li>
                <li className="FooterLayout__list__link">FAQS</li>
                <li className="FooterLayout__list__link">REDES</li>
                <li className="FooterLayout__list__link">CONTACTO</li>
                <li className="FooterLayout__list__link">RECURSOS</li>
                </ul>
            <p className="FooterLayout__text text-center text-white">© 2022 Company, Inc</p>
        </footer>
    )
}
export default FooterLayout