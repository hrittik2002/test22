"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "Bolona esob ",
      "sotti korbe na?",
      "korbe na to?",
      "Pleasee cutie",
      "Pleasee ame amar cute gf tar theka sunte chai",
      "oiii future wife ta bolonaaaaaaaaa",
      "PLEASE DEAR",
      "Please bolona :*(",
      "Doctor bolache ame na pele bachte parbo na",
      "Ok more gelam",
      "Ame kintu tomar futur husband er bhoot",
      "please babe",
      ":((((",
      "PRETTY PLEASE",
      "eiii cutiee please",
      "Na :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="my-4 text-4xl font-bold"> I love you dear!! Ame jani tomar kirom feel holo ei kichu din but sob kosto over tomar ame r pete debo na. So propose to wapp e korte hobe ekane kora jabe na. But ekta gift ache tomar jonno. Click koro ei heart tai - <a href="https://www.youtube.com/watch?v=rvDu7mU762A">❤️</a> </div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h3 className="my-4 text-4xl">Dear I know ame kosto deachi tomake. But ame r kosto pete debo na tomake. Akbar amake chance dao sob thik korar. I love you Samarpita. So green button ta press koro jodi amake propse back korte chao sob bhule giye r red button ta jodi lagche jamon ache thikache </h3>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              yes 
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "Bolona esob" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
