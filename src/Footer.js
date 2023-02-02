import React from 'react'

export default function Footer() {

  
  return (
    <div>
    <footer id="foot" className="bg-dark text-center text-white footer--pin">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css" integrity="sha384-3AB7yXWz4OeoZcPbieVW64vVXEwADiYyAEhwilzWsLw+9FgqpyjjStpPnpBO8o8S" crossorigin="anonymous"/>
        {/* <!-- Grid container --> */}
        <div className="container p-4 pb-0">
            {/* <!-- Section: Social media --> */}
            <section className="mb-4">
            {/* <!-- Facebook --> */}
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fab fa-facebook-f"></i></a>

            {/* <!-- Twitter --> */}
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-twitter"></i></a>

            {/* <!-- Google --> */}
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-google"></i></a>

            {/* <!-- Instagram --> */}
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-instagram"></i></a>

            {/* <!-- Linkedin --> */}
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-linkedin-in"></i></a>

            {/* <!-- Github --> */}
            <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="fab fa-github"></i></a></section>
            {/* <!-- Section: Social media --> */}
        </div>
        {/* <!-- Grid container --> */}

        {/* <!-- Copyright --> */}
        <div className="text-center p-3" style={{"background-color": "rgba(0, 0, 0, 0.2)"}}>Gal Amit |  Aviel Mutai</div>
        {/* "https://mdbootstrap.com/*/}
        {/* <!-- Copyright --> */}

    </footer>
    </div>
  )
}
