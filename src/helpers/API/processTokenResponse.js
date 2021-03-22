import Swal from "sweetalert2";
import { login, checkingFinish } from "../../actions/auth";

export const processTokenResponse = (body, dispatch) => {
  if (body.ok) {
    localStorage.setItem("token", body.token);
    localStorage.setItem("token-init-date", new Date().getTime());
    dispatch(
      login({
        uid: body.uid,
        name: body.name,
      })
    );
  } else {
    console.log(body.details?.email);
    const { details } = body;
    const errors = [];
    for (const p in details) {
      errors.push(details[p].msg);
    }
    Swal.fire("Erro", errors.join(", "), "error");
    dispatch(checkingFinish());
  }
};
