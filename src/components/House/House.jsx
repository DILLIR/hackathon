import React from 'react'
import Container from '../UI/Container'
import './house.css'
import img from '../../img/house.png'
import star from '../../img/vector.png'

export default function House() {
  return (
    <section className="house">
        <Container>
            <h2 className="house__title">Available housing options</h2>
            <div className="house__block">
                <div className="house__item">
                    <div className="house__img">
                        <img src={img} alt="" />
                        <div className="rating">
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                        </div>
                        <div className="time">04.12.2022</div>
                    </div>
                    <div className="house__text">
                        <div className="house__name">Two-roomed flat</div>
                        <div className="house__location">Košice IV - South, Košice district</div>
                        <div className="house__desc">Ready to provide an apartment for those in need</div>
                        <div className="house__price">
                            <div className="free">FREE</div>
                            <a href="" className="button">Contakt</a>
                        </div>
                    </div>
                </div>
                <div className="house__item">
                    <div className="house__img">
                        <img src={img} alt="" />
                        <div className="rating">
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                        </div>
                        <div className="time">04.12.2022</div>
                    </div>
                    <div className="house__text">
                        <div className="house__name">Two-roomed flat</div>
                        <div className="house__location">Košice IV - South, Košice district</div>
                        <div className="house__desc">Ready to provide an apartment for those in need</div>
                        <div className="house__price">
                            <div className="free">FREE</div>
                            <a href="" className="button">Contakt</a>
                        </div>
                    </div>
                </div>
                <div className="house__item">
                    <div className="house__img">
                        <img src={img} alt="" />
                        <div className="rating">
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                            <img src={star} alt="" />
                        </div>
                        <div className="time">04.12.2022</div>
                    </div>
                    <div className="house__text">
                        <div className="house__name">Two-roomed flat</div>
                        <div className="house__location">Košice IV - South, Košice district</div>
                        <div className="house__desc">Ready to provide an apartment for those in need</div>
                        <div className="house__price">
                            <div className="free">FREE</div>
                            <a href="" className="button">Contakt</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="house__alert">If you are ready to provide housing for charitable purposes,<br></br> write to us by mail <span className='orange'>firsthelp@firstimeke.sk</span></div>
        </Container>
    </section>
  )
}
