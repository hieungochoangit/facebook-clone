import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isShowing, hide, children, header, footer }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-30" />
          <div
            className="bg-white text-center absolute left-1/2 -translate-x-1/2 z-50 min-w-[400px] mx-auto rounded-sm top-[50px]"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="mx-auto shadow-2xl">
              <div className="modal-header">{header}</div>
              <div className="modal-content">{children}</div>
              <div className="modal-footer">{footer}</div>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default Modal;
