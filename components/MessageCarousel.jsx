import React from "react";
import Marquee from "react-fast-marquee";

const MessageCarousel = ({ messages, speed = 60, pauseOnHover = true, direction }) => {
  return (
    <>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#455099] to-[#9089fc] opacity-45"
        />
      </div>
      <Marquee direction={direction} pauseOnHover={pauseOnHover} gradient={false} speed={speed} className="w-full">
        {messages.map((message, index) => (
          <div key={index} className="text-xl text-black mx-8 border p-12 flex-wrap rounded-xl border-green-500 shadow-lg">
            {message}
          </div>
        ))}
      </Marquee>
    </>
  );
};

export default MessageCarousel;
