/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import  { Suspense, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Canvas } from '@react-three/fiber'

import Fox from '../models/Fox'
import Loader from '../components/Loader'
import useAlerts from '../hooks/useAlerts'
import Alert from '../components/Alert'

const Contact = () => {
  const FormRef = useRef(null)
  const [form, setForm] = useState({ name:'', email:'', message:'' })
  const [isLoading, setIsLoading] = useState(false)
  const [currentAnimation, setCurrentAnimation] = useState('idle')

  const { alert, showAlert, hideAlert } = useAlerts()

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }
  const handleFocus = () => {
    setCurrentAnimation('walk')
  }
  const handleBlur = () => {
    setCurrentAnimation('idle')
  }
  const handleSubmit =(e)=>{
    e.preventDefault()
    setIsLoading(true)
    setCurrentAnimation('hit')

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: 'Muhammed',
        from_email: form.email,
        to_email: 'mcham5643@gmail.com',
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
    ).then(() => {
      setIsLoading(false);
      showAlert({ show: true, text: 'Msg sent successfully!', type: 'Success'})
      setTimeout(()=>{
        hideAlert()
        setCurrentAnimation('idle')
        setForm({name:'', email:'', message:''})
      }, [3000])
    }).catch((err) => {
      setIsLoading(false)
      setCurrentAnimation('idle')
      console.log(err)
      showAlert({ show: true, text: 'Msg not received!', type: 'danger'})
    })
  }

  return (
   <section className="relative flex lg:flex-row flex-col max-container h-[100vh]">
    {alert.show && <Alert {...alert} />}
    
    <div className='flex-1 flex min-w-[50%] flex-col'>
      <h1 className='head-text'>Bruh Get in Touch!</h1>

      <form 
        onSubmit={handleSubmit}
        className="flex flex-col w-full gap-6 mt-14">

        <label htmlFor="name" className="text-black-500 font-semibold">
          Name
          <input type="text"
                 name='name'
                 className='input'
                 placeholder='mocham'
                 required 
                 value={form.name}
                 onChange={handleChange}
                 onFocus={handleFocus}
                 onBlur={handleBlur}/>
          </label>
          <label htmlFor="email" className="text-black-500 font-semibold">
          Email
          <input type="text"
                 name='email'
                 className='input'
                 placeholder='kict@hotmail.com'
                 required 
                 value={form.email}
                 onChange={handleChange}
                 onFocus={handleFocus}
                 onBlur={handleBlur}/>
          </label>
          <label htmlFor="message" className="text-black-500 font-semibold">
          Your Message
          <textarea
                 name='message'
                 rows={4}
                 className='textarea'
                 placeholder='Hi dear, how can I help you?'
                 required 
                 value={form.message}
                 onChange={handleChange}
                 onFocus={handleFocus}
                 onBlur={handleBlur}/>
          </label>
          <button className="btn"
                  type='submit'
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  disabled={isLoading}>
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </button>
      </form>
    </div>
    <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas 
          camera={{ 
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000
          }}>
            <directionalLight intensity={2.5} 
              position={[0, 0, 1]}/>
              <ambientLight 
                intensity={0.5}

              />
              <Suspense fallback={Loader}>
                <Fox 
                currentAnimation={currentAnimation}
                 position={[0.6, 0.35, 0]}
                 rotation={[12.6, -0.6, 0]}
                 scale={[0.5, 0.5, 0.5]}
                />
              </Suspense>
        </Canvas>
    </div>
   </section>
  )
}

export default Contact