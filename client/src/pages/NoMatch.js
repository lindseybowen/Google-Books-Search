import React from "react";
import Navbar from "../components/nav";


function NoMatch() {
  return (
    <div>
          <Navbar>
            <h1>404 Page Not Found</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          </Navbar>
    </div>
  );
}

export default NoMatch;