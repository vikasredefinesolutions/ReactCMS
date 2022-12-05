
const allClass = () => {
 

  return (
    <>
      <div className="absolute top-1/2 -translate-y-1/2 left-4 z-10 flex items-center">
                  <button
                    onClick={clickHandler}
                    className="bg-light-gray bg-opacity-90 flex justify-center items-center w-10 h-10 rounded-md shadow-md focus:outline-none"
                  >
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="chevron-left w-10 h-10"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
              
              <div className="absolute top-1/2 -translate-y-1/2 right-4 z-10 flex items-center">
                  <button
                    onClick={clickHandler}
                    className="bg-light-gray bg-opacity-90 flex justify-center items-center w-10 h-10 rounded-md shadow-md focus:outline-none"
                  >
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="chevron-right w-10 h-10"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>

                          <iframe
                            class="p-0 w-full aspect-[7/3]"
                            src={`https://player.vimeo.com/video/?autoplay=1&amp;loop=1&amp;background=1&amp;muted=1`}
                            allow="autoplay; encrypted-media"
                            frameborder="0"
                          ></iframe>
    </>
  );
};

export default allClass;
