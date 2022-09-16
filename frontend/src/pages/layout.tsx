import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { BottomAngle, TopAngle } from "../components/topdown";
import useName from "../hooks/useName";
import useWheel from "../hooks/useWheel";
import { useStore } from "../store";
import { CenterCardMain } from "../style/global";
import { SubTitle, Title } from "../style/pages/layout";

export default function Layout() {
  const navigate = useNavigate();
  const { name, pageTotalCardNumber } = useStore();
  useName().then((isSetName) => {
    if (!isSetName) navigate("/set-name");
  });
  const cardIndex = useWheel();
  useEffect(() => console.log(cardIndex, pageTotalCardNumber), []);
  return (
    <>
      {cardIndex.current !== 1 && <TopAngle />}
      <CenterCardMain>
        <Title>
          환영합니다{name !== "" && ","}
          {name === "" ? "!" : <br />}
          {name !== "" && ` ${name}님!`}
        </Title>
        {!name && <SubTitle>아래로 스크롤해 시작해주세요.</SubTitle>}
      </CenterCardMain>
      <Outlet />
      {cardIndex.current < pageTotalCardNumber && <BottomAngle />}
    </>
  );
}
