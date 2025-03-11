import React from 'react'

const SingleContactSocial = ({ Icon, link }) => {
    return (
      <div className="text-2xl h-12 w-12 border border-orange text-orange rounded-full p-3 flex items-center justify-center">
        <button
          onClick={() => window.open(link, "_blank", "noopener,noreferrer")}
          className="cursor-pointer"
        >
          <Icon />
        </button>
      </div>
    );
  };
  

export default SingleContactSocial