/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-refresh/only-export-components */

import { Link } from "react-router-dom"

const CTA = () => {
  return (
    <section className='cta'>
        <p className="cta-text">Want to build something? <br className="sm:block hidden" />
        Let's start the project together.
        </p>
        <Link to='/contact' className="btn">
            Contact
        </Link>
    </section>
  )
}

export default CTA