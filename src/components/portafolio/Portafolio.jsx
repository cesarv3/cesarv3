import React from 'react'
import './portafolio.css';
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'

const data = [
  {
    id:1,
    image: IMG1,
    title: 'Sistema de Prestamos de Laboratorio',
    demo: 'https://ingenieria.mxl.uabc.mx/'
  },
  {
    id:2,
    image: IMG2,
    title: 'Presupuesto Basado en Resultados',
    demo: 'https://sed-pbr.uabc.mx/'
  },
  {
    id:3,
    image: IMG3,
    title: 'Sistema Unificado de Presupuesto y Finanzas',
    demo: 'https://supyf.uabc.mx'
  },

]

const Portafolio = () => {
  return (
    <section id='portafolio'>
      <h5>
        My Recent Work
      </h5>
      <h2>
        Portfolio
      </h2>
      <div className='container portfolio__container'>
        {
          data.map(({id,image,title,demo}) => {
            return(
              <article key={id} className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={image} alt={title}></img>
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
          
          <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
          
        </article>

            )
          })
        }
        

      </div>
    </section>
  )
}

export default Portafolio