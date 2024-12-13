import React from 'react';

// Define the type for the props
interface GreetingProps {
  name: string; // The name prop must be a string
}

const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
