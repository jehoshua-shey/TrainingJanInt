import React from 'react'

const page = () => {
    const submitForm = () => {
        const name = document.forms["signup"]["name"].value
        const username = document.forms["signup"]["username"].value
        const email = document.forms["signup"]["email"].value
        const password = document.forms["signup"]["password"].value
        const confirm = document.forms["signup"]["confirm"].value

        if (password === confirm) {
            localStorage.setItem('name', name)
            localStorage.setItem('username', username)
            localStorage.setItem('email', email)
            localStorage.setItem('password', password)
        } else {
            window.alert("Abeg check the two passwords, e be lyk say dem no be the same")
            return
        }
        return false
    }

    return (
        <React.Fragment>
            <section className="form-section">
            <h1 className="signup-header">Signup for G10Pay</h1>
            <form onsubmit={submitForm} name="signup" className="signup-form">
                <input type="text" name="name" required className="form-input" placeholder="Your name" />
                <input type="text" name="username" required className="form-input" placeholder="Select username" />
                <input type="email" name="email" required className="form-input" placeholder="Your email" />
                <input type="password" name="password" required className="form-input"
                    placeholder="Select a strong password"/>
                <input type="password" name="confirm" required className="form-input" placeholder="Confirm password" />
                <input type="submit" value="Submit" required className="form-button pointer" />
            </form>
        </section>
        </React.Fragment>
    )
}

export default page