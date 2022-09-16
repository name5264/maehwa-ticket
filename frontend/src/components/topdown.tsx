import { Header, Footer } from "../style/components/topdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

export function TopAngle() {
  return (
    <Header>
      <FontAwesomeIcon icon={faAngleUp} size="3x" />
    </Header>
  );
}

export function BottomAngle() {
  return (
    <Footer>
      <FontAwesomeIcon icon={faAngleDown} size="3x" />
    </Footer>
  );
}
