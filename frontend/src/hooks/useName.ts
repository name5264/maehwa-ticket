import { useEffect } from "react";
import { useStore } from "../store";

export default async function useName() {
  const { name, setName } = useStore();
  const returnBoolean: boolean = await new Promise((resovle) => {
    useEffect(() => {
      if (!window.localStorage.getItem("name")) {
        resovle(false);
        return;
      } else if (name === "") {
        const storageName = window.localStorage.getItem("name");
        if (storageName) {
          setName(storageName);
          resovle(true);
        } else {
          resovle(false);
        }
      }
    }, []);
  });
  return returnBoolean;
}
