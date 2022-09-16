import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../store";
import { CenterCardMain } from "../style/global";
import {
  Form,
  NameInput,
  SetButton,
  SubTitle,
  Title,
} from "../style/pages/set-name";

export default function SetName() {
  const navigate = useNavigate();
  const { setPageTotalCardNumber, name, setName, setCardIndex } = useStore();
  useEffect(() => setPageTotalCardNumber(2), []);
  return (
    <CenterCardMain>
      {" "}
      <Title>이름을 입력해주세요.</Title>
      <SubTitle>
        이름 전체를 실명으로 입력해주세요.
        <br /> 이후에 본인 확인 용도로 사용됩니다.
        <br /> 입력한 이름은 다시 변경할 수 없습니다.
      </SubTitle>
      <Form>
        <NameInput
          placeholder="이름을 입력해주세요."
          onChange={(e: { target: { value: string } }) =>
            setName(e.target.value)
          }
        />
        <SetButton
          onClick={() => {
            console.log(name);
            window.localStorage.setItem("name", name);
            navigate("/");
            setCardIndex(0);
          }}
        >
          완료
        </SetButton>
      </Form>
    </CenterCardMain>
  );
}
