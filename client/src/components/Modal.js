import React from "react";
import ReactDOM from "react-dom";

const Modal = props => {
  // return values
  // createPortal takestwo args:- comp. to be rendered
  //                           :- reference to  the ele we wanna attach this to
  return ReactDOM.createPortal(
    // onclick event to exit modal, if we trigger any event on a child
    // element and that child element does not handle that event the event
    // is going to bubble up back to the parent element unless it gets caught
    // with an event handler, to prevent this we can add an event handler to
    // child as well. (Whenever event occurs we get event object e)
    <div
      onClick={props.onDissmiss}
      className="ui dimmer modals visible active"
    >
      // onClick event handler to exit modal only when user clicks in background
      of modal
      <div
        onClick={e => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header"> {props.title} </div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.actions} </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
