import { Link } from "react-router-dom"
const MyHero=()=>{
    return(
        <>
        <div class="p-5 overflow-hidden d-flex flex-column align-items-center justify-content-center text-center border-bottom bg min-vh-100">
            <h1 class="display-4 fw-bold">SOMOS LO QUE HACEMOS</h1>
            <div class="col-lg-6 mx-auto">
                <p class="lead mb-4">Pero sobre todo, somos lo que hacemos para cambiar lo que somos...</p>
                <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                    {/* <button type="button" class="btn btn-primary btn-lg px-4 me-sm-3">Primary button</button> */}
                    <Link to={'/productos'}>
                        <button type="button" class="btn btn-warning btn-lg px-4">Comprar ahora</button>
                    </Link>
                </div>
            </div>
        </div>
    </>

    )
}
export default MyHero