import React from "react";
import "./app-colors.css";

function AppColors() {
  return (
    <div className="app-color background">
      <p>Background</p>
      <div className="app-color foreground">
        <p>Foreground</p>
        <div className="app-color button-standard">
          <p>Button standard</p>
          <div className="app-color button-hover">
            <p>Button hover</p>
            <div className="app-color button-active">
              <p>Button active</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppColors;
