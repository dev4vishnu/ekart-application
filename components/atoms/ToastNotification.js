import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { useSelector, useDispatch } from "react-redux";
import { useState,useEffect } from "react";
import { snackbarMessage } from "../../redux/action/user";

export default function ToastNotification() {
  const message = useSelector((state) => state.snackbar);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    open: false,
    vertical: "bottom",
    horizontal: "left",
  });

  const { vertical, horizontal, open } = state;

  useEffect(() => {
    setState({ ...state, open: true });
    setTimeout(() => {
      setState({ ...state, open: false });
    }, 4000);
  }, [message])
  const handleClose = () => {
    setState({ ...state, open: false });
    dispatch(snackbarMessage(null));
  };

  return (
    <>
      {message && (
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          onClose={handleClose}
          color="secondary"
          message={message}
          key={vertical + horizontal}
          action={
            <>
              <IconButton
                aria-label="close"
                color="secondary"
                onClick={handleClose}
              >
                <CloseIcon />
              </IconButton>
            </>
          }
        />
      )}
    </>
  );
}
