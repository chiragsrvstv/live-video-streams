import React from "react";
import Modal from "../Modal";
import history from '../../history';

const StreamDelete = () => {
  // assigning two things(buttons here) from a single actions variable isn't a
  // valid JS, so we decided to wrap them with a div but that div
  // didn't worked along with semanticUi, So, using React fragment
  // which will maintain our styling.
  // React fragment is a jsx looking element that doesn't produce any
  // HTML, almost invisible
  const actions = (
    <React.Fragment>
      <button className="ui button negative"> Delete </button>
      <button className="ui button"> Cancel </button>
    </React.Fragment>
  );
  return (
    <div className="ui container">
      StreamDelete
      <Modal
        title="Delete Stream"
        content="Are you sure you want to delete this Stream ?"
        actions={actions}
        onDissmiss={()=> history.push('/')}
      />
    </div>
  );
};

export default StreamDelete;
