import React from 'react';
import { Link } from 'react-router-dom'

const FixedButton = () => {
  return (
    <button
      className="fixed bottom-4 cursor pointer right-4 p-4 bg-blue-500 hover:bg-blue-700 text-white rounded-full shadow-lg"
    >
    <Link to='register'>Apply Now To See Offers</Link>
    </button>
  );
};

export default FixedButton;
