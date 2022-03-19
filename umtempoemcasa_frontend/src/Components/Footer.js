import React from 'react'

function Footer() {
    return (
        <footer className="bg-dark text-center text-white">

            <div className="container p-4">

                <section className="mb-4">

                    <a className="btn btn-outline-warning btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-facebook-f"></i
                    ></a>


                    <a className="btn btn-outline-warning btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-twitter"></i
                    ></a>


                    <a className="btn btn-outline-warning btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-google"></i
                    ></a>


                    <a className="btn btn-outline-warning btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-instagram"></i
                    ></a>


                    <a className="btn btn-outline-warning btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-linkedin-in"></i
                    ></a>


                    <a className="btn btn-outline-warning btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-github"></i
                    ></a>
                </section>



                <section className="mb-4">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
                        repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
                        eum harum corrupti dicta, aliquam sequi voluptate quas.
                    </p>
                </section>



                <section className="">

                    <div className="row justify-content-center">


                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">SEJA UM APOIADOR</h5>

                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="#!" className="text-white">Link 1</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Link 2</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Link 3</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Link 4</a>
                                </li>
                            </ul>
                        </div>



                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">SEJA UM APOIADOR</h5>

                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="#!" className="text-white">Link 1</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Link 2</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Link 3</a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white">Link 4</a>
                                </li>
                            </ul>
                        </div>



                    </div>

                </section>

            </div>



            <div className="text-center p-3" >
                &copy; 2021 - UmTempoEmCasa - <a asp-area="" asp-controller="Home" asp-action="Privacy">Privacy </a>

            </div>

        </footer>
    )
}

export default Footer