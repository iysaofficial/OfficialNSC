import React from 'react'

const category = () => {
  return (
    <section className='category-section'>
        <div className='container'>
            <div className='title text-center fw-bold mb-5'>
                <h1>Kategori</h1>
            </div>
            <div className='wrapper'>
                <div className='box'>
                    <h5 className='fw-bold'>Applied Life Sciences</h5>
                    <i className="fas fa-microscope fa-3x p-3"></i>
                </div>
                <div className='box'>
                    <h5 className='fw-bold'>Innovative Social Sciences</h5>
                    <i className="fas fa-search fa-3x p-3"></i>
                </div>
                <div className='box'>
                    <h5 className='fw-bold'>Applied Physics and Engineering</h5>
                    <i className="fas fa-atom fa-3x p-3"></i>
                </div>
                <div className='box'>
                    <h5 className='fw-bold'>Environmental Sciences</h5>
                    <i className="fas fa-globe fa-3x p-3"></i>
                </div>
                <div className='box'>
                    <h5 className='fw-bold'>IT and Robotics</h5>
                    <i className="fas fa-robot fa-3x p-3"></i>
                </div>
            </div>
        </div>
    </section>
  )
}

export default category
