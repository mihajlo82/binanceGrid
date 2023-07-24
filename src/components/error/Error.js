import { ERROR_TITLE } from "../../constants/text";
import Title from "../../utils/title/Title";
import style from "./error.module.css";

const Error = () => {
  return (
    <section className={style.error_page_wrapp}>
      <Title name={ERROR_TITLE} />
      <button
        type="button"
        className={style.button}
        onClick={() => window.location.reload()}
      >
        Refresh page
      </button>
    </section>
  );
};

export default Error;
