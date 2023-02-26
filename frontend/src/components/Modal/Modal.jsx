import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isShowing, hide, children, header, footer }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div onClick={hide} className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-30" />
          <div
            className="bg-white text-center relative z-50 max-w-[400px] mx-auto rounded-sm top-1/2 -translate-y-3/4"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="mx-auto">
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
