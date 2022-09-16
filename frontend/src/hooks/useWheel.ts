import { debounce } from "lodash";
import React, { useEffect, useRef, useState } from "react";
import useStateRef from "react-usestateref";
import { useStore } from "../store";

export default function useWheel() {
  const [_, setCardIndex, cardIndexRef] = useStateRef(1);
  const isCardMoved = useRef(false);
  const { setCardIndex: setCardIndexStore } = useStore();
  const cardHeight = useRef(0);

  useEffect(() => {
    cardHeight.current = window.innerHeight;

    window.addEventListener("wheel", (e) => {
      if (e.deltaY >= 100 && !isCardMoved.current) {
        isCardMoved.current = true;
        setCardIndex(cardIndexRef.current + 1);
        setCardIndexStore(cardIndexRef.current + 1);
        window.scrollTo({
          top:
            cardHeight.current *
            (cardIndexRef.current === 1 ? 0 : cardIndexRef.current),
          behavior: "smooth",
        });
      } else if (e.deltaY <= -80 && !isCardMoved.current) {
        isCardMoved.current = true;
        setCardIndex(
          cardIndexRef.current - 1 <= 1 ? 1 : cardIndexRef.current - 1
        );
        setCardIndexStore(
          cardIndexRef.current - 1 <= 1 ? 1 : cardIndexRef.current - 1
        );
        window.scrollTo({
          top:
            cardHeight.current *
            (cardIndexRef.current === 1 ? 0 : cardIndexRef.current),
          behavior: "smooth",
        });
      }
      setTimeout(() => {
        isCardMoved.current = false;
      }, 1000);
    });
  }, []);

  return cardIndexRef;
}
