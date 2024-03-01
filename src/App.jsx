import React, { useRef } from 'react';

export const App = () => {
  // ✅ Create two separate refs for the top and bottom sections of the page
  const topRef = useRef(null);
  const bottomRef = useRef(null);

  // ✅ Modify the executeScroll function to accept a ref as its parameter
  // and use it to scroll into view
  function executeScroll(targetRef) {
    // take whatever given as a parameter use it as a reference so the method
    //will scroll to it
    targetRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      {/* ✅ Use the topRef for the first div */}
      <div className="fullscreen-height" ref={topRef}>
        {/*ref={topRef} helps to identify this div}
        <h1>Ref exercise starter</h1>
        {/* ✅ Use an anonymous function to pass the bottomRef to executeScroll */}
        <button onClick={() => executeScroll(bottomRef)}>Click to scroll down</button>
      </div>
      {/* ✅ Use the bottomRef for the second div */}
      <div className="fullscreen-height lightblue-background" ref={bottomRef}>
        <h1>Hello</h1>
        {/* ✅ Use an anonymous function to pass the topRef to executeScroll */}
        <button onClick={() => executeScroll(topRef)}>Click to scroll up</button>
      </div>
    </>
  );
};

//-----EXPLANATION:
/* Using arrow functions inline in the onClick handler is a convenient way to pass arguments to your event 
handler functions. It allows you to directly invoke a function with specific arguments based on user interactions,
 like clicking a button. This pattern is useful in many scenarios beyond scrolling, such as handling form
  submissions with specific data, toggling UI states, or interacting with APIs based on user input.
 */
