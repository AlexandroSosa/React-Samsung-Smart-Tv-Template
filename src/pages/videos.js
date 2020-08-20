import React from "react";

// Modules
import { connect } from "react-redux";

function Videos(props) {
  return (
    <div className="container">
      <h2>Videos</h2>
      <h6 >Coming soon!</h6>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    setIsFocusedInSideBar: (data) => {
      dispatch({
        type: "SET_FOCUSED_SIDEBAR",
        focused: data,
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(Videos);
