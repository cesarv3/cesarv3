import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import ME from '../../assets/me.png'
const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
          <div className='about__me'>
              <div className='about__me-image'>
                <img src={ME} alt='About image'/>              
                </div>
          </div>

          <div className='about__content'>
            <div className='about__cards'>
              <article className='about__card'>
                <FaAward className="about__icon"/>
                <h4>Experience</h4>
                <small>2+ Years Working</small>
              </article>

              <article className='about__card'>
                <FiUsers className="about__icon"/>
                <h4>Clients</h4>
                <small>2+ Clients</small>
              </article>

              <article className='about__card'>
                <VscFolderLibrary className="about__icon"/>
                <h4>Projects</h4>
                <small>2+ Projects completed</small>
              </article>
            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore sint libero eveniet ipsum eligendi nam, autem quae pariatur quaerat, incidunt earum harum expedita modi? Optio omnis odit quasi illo totam.</p>

            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
          </div>
      </div>
    </section>
  )
}

export default about