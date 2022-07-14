const MainContainerLayout=({children})=>{
    return(
        <section className="container-fluid d-flex flex-column flex-wrap justify-content-between min-vh-100">
            {children}
        </section>
    )
}
export default MainContainerLayout