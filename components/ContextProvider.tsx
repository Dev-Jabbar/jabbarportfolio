import React, { createContext, useState, useRef } from "react";
type ContextType = {
  loaded: boolean;
  setLoaded: React.Dispatch<React.SetStateAction<boolean>>;
  audioRef: React.RefObject<HTMLAudioElement>;
  handleClick: () => void;

  handleButtonClick: () => void;
};
const MyContext = createContext<ContextType | undefined>(undefined);

type Props = {
  children: React.ReactNode;
};

const ContextProvider = ({ children }: Props) => {
  const [loaded, setLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleClick = () => {
    setTimeout(() => {
      audioRef.current?.play();
    }, 4000);
    setLoaded(true);
  };

  const handleButtonClick = () => {
    if (audioRef.current?.paused) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  };
  return (
    <div>
      <audio ref={audioRef} src="/idea.mp3" />
      <MyContext.Provider
        value={{
          loaded,
          setLoaded,
          audioRef,
          handleClick,

          handleButtonClick,
        }}
      >
        {children}
      </MyContext.Provider>
    </div>
  );
};

export { ContextProvider, MyContext }; // Use named exports instead of default export
