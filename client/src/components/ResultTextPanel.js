import { useState, useEffect } from "react";
import "../styles.css";

export default function ResultText() {
  return (
    <div className="resultTextPanel">
      <p>Your summary here:</p>
      <div className="textPanel">
        <p></p>
      </div>
    </div>
  );
}
