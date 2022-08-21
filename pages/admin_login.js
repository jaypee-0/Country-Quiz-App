import React from 'react'

export const admin_login = () => {
  return (
    <section class="d-flex vh-100 position-relative">
        <div class="d-none d-md-block bg-light col-md-6">
            <img src="" alt="">
        </div>
        <div class="container col-11 col-md-6 mx-md-auto my-auto">
            <h1 class="mb-4 fw-bold">Admin Login</h1>
            <p class="mb-5 fw-bold">You're a step a way from letting people get great insight</p>
            <form action="" class="d-flex col-md-11 flex-column">
                <label>Enter User Name</label>
                <input class="my-3 px-2 py-3 border" style="border-radius: 12px;" type="text" placeholder="e.g JohnDoe">
                <label class="mt-3">Password</label>
                <input class="my-3 px-2 py-3 border" style="border-radius: 12px;" type="text" placeholder="At least 8 characters">
                <button class="bg-dark text-light border py-3" style="border-radius: 12px; margin-top: 3rem;">Login</button>
            </form>
            <p class="col-12 col-md-11 text-center fs-4 mt-5">Forgot Password</p>
        </div>
        <footer class="position-absolute container" style="bottom: 0;">
            <ul class="list-unstyled d-flex my-2 flex-column flex-md-row justify-content-md-evenly">
                <li>Privacy Policy</li>
                <li>Terms of use</li>
                <li>Disclaimer</li>
                <li>&copy;2022 Venta Inc. All rights reserved.</li>
            </ul>
        </footer>
    </section>
  )
}
