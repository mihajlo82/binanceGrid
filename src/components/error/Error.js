import Title from "../../utils/title/Title";
import { ERROR_TITLE } from "../../constants/text";
import { Button, ErrorContainer } from "./styled";

const Error = () => {
  return (
    <ErrorContainer>
      <Title name={ERROR_TITLE} />
      <Button type="button" onClick={() => window.location.reload()}>
        Refresh page
      </Button>
    </ErrorContainer>
  );
};

export default Error;
