import { useEffect } from "react";
import { useStore } from "../store";
import { CenterCardMain } from "../style/global";
import { Ticket, Title } from "../style/pages";

export default function Index() {
  const { setPageTotalCardNumber } = useStore();
  useEffect(() => setPageTotalCardNumber(3), []);
  return (
    <CenterCardMain>
      <Title>신청한 티켓을 확인해주세요!</Title>

      <Ticket></Ticket>
      <Ticket></Ticket>
    </CenterCardMain>
  );
}
