import React from 'react'

function StoreFooter() {
  return (
    <div><footer
    className="bg-light text-center text-lg-start"
    style={{ marginTop: 30 }}
>
    {/* Grid container */}
    <div className="container p-4">
        <div className="row">
            <div className="col-md-6 mb-4 mb-md-0 d-flex justify-content-center justify-content-md-start align-items-center">
                <strong>Get connected with us on social networks</strong>
            </div>
            <div className="col-md-6 d-flex justify-content-center justify-content-md-end">
                {/* Facebook */}
                <a
                    className="btn btn-primary btn-sm btn-floating me-2"
                    style={{ backgroundColor: "#3b5998" }}
                    href="#!"
                    role="button"
                >
                    <i className="fab fa-facebook-f" />
                </a>
                {/* Twitter */}
                <a
                    className="btn text-white btn-sm btn-floating me-2"
                    style={{ backgroundColor: "#55acee" }}
                    href="#!"
                    role="button"
                >
                    <i className="fab fa-twitter" />
                </a>
        
                {/* Youtube */}
                <a
                    className="btn text-white btn-sm btn-floating me-2"
                    style={{ backgroundColor: "#ed302f" }}
                    href="#!"
                    role="button"
                >
                    <i className="fab fa-youtube" />
                </a>
                {/* Instagram */}
                <a
                    className="btn text-white btn-sm btn-floating me-2"
                    style={{ backgroundColor: "#ac2bac" }}
                    href="#!"
                    role="button"
                >
                    <i className="fab fa-instagram" />
                </a>
            </div>
        </div>
        <hr className="my-3" />
        <div className="row">
            <div className="col-lg-4 mb-4 mb-lg-0">
                <p>
                    <strong>About us</strong>
                </p>
                <p>
  We are a leading HR management platform focused on delivering efficient and scalable solutions for businesses of all sizes. Our goal is to simplify employee administration through intuitive tools and features.
</p>

            </div>
           
        </div>
    </div>
    <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
    >
        © {new Date().getFullYear()} Copyright:

        <a className="text-dark" href="https://github.com/AbdelrahmanElsaeid">
            apeksha pitaliya
        </a>
    </div>
    {/* Copyright */}
</footer>
</div>
  )
}

export default StoreFooter