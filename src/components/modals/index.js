import React from "react";
import "./index.scss";

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <a className="closeModal" onClick={handleClose} href="#">X</a>
                {children}
            </section>
        </div>
    );
};

export default Modal