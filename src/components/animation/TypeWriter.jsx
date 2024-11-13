import React from "react";
import Typewriter from "typewriter-effect";

export default function TypewriterComponent({ strings, className, style }) {
  return (
    <div className={className} style={style}>
      <Typewriter
        options={{
          strings: strings,
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
}
