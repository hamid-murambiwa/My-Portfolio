import React, { useState } from "react";
import img from '../../style/images/button.png'
import "../../style/modal.css";

export default function Modal(props) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        View Project
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>{props.project.name}</h2>
            <section className="main-modal-content">
            <div className="modal-img-con">
              <img src={props.project.image} alt={props.project.name} className="modal-img" />
            </div>
            <div className="modal-text-con">
            <p>{props.project.description}</p>
            <div className="modal-tags">
            {props.project.tags.map(tag => (
                <p>{tag}</p>
            ))}
            </div>
            </div>
            </section>
            <div className="modal-link-btn-con">
            <a href={props.project.live}>
              View Live
            </a>
            {console.log(props.project.link)}
            <a href={props.project.github}>
              View Source
            </a>
            </div>
            <button className="close-modal" onClick={toggleModal}>
              <img src={img} alt="exit button icon" className="modal-exit-btn" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}