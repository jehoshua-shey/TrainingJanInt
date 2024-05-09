'use client'

import React, {useState} from 'react'

const page = () => {
    const [user, setUser] = useState({name: '', password: '', cpassword: '', email: '', phone: '', username: '' })

    const submitForm = async (e) => {
        e.preventDefault()

        if (user.password === user.cpassword) {
            try {
                const response = await fetch('/api/auth/signup', {
                    method: 'POST',
                    body: JSON.stringify({
                        name: user.name,
                        password: user.password,
                        email: user.email,
                        username: user.username,
                        phone: user.phone
                    })
                })

                const res = await response.json()

                if (response.status == 200) {
                    alert(res.message)
                }
                else {
                    alert(res.message)
                }
            } catch (error) {
                console.log(error)
            }
        } 
        else {
            alert('passwords are not the same')
        }
    }

    const handleForm = param => e => {
        if (param == 'name') {
            setUser({...user, name: e.target.value})
        }
        else if (param == 'username') {
            setUser({...user, username: e.target.value})
        }
        else if (param == 'email') {
            setUser({...user, email: e.target.value})
        }
        else if (param == 'phone') {
            setUser({...user, phone: e.target.value})
        }
        else if (param == 'password') {
            setUser({...user, password: e.target.value})
        }
        else if (param == 'cpassword') {
            setUser({...user, cpassword: e.target.value})
        }
    }

    return (
        <React.Fragment>
            <section className="form-section">
            <h1 className="signup-header">Signup for G10Pay</h1>
            <form onSubmit={submitForm} name="signup" className="signup-form">
                <input type="text" value={user.name} onChange={handleForm('name')} name="name" required className="form-input" placeholder="Your name" />
                <input type="text" value={user.username} onChange={handleForm('username')} name="username" required className="form-input" placeholder="Select username" />
                <input type="email" value={user.email} onChange={handleForm('email')} name="email" required className="form-input" placeholder="Your email" />
                <input type="password" value={user.password} onChange={handleForm('password')} name="password" required className="form-input"
                    placeholder="Select a strong password"/>
                <input type="password" value={user.cpassword} onChange={handleForm('cpassword')} name="confirm" required className="form-input" placeholder="Confirm password" />
                <input type="submit" value="Submit" required className="form-button pointer" />
            </form>
        </section>
        </React.Fragment>
    )
}

export default page