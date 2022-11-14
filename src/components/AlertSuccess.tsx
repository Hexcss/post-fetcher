import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../state";

import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

const AlertSuccess: React.FC= () => {

  const isAlertOpen = useSelector((state: State) => state.isAlertOpen);
  const dispatch = useDispatch();
  const { openAlert } = bindActionCreators(actionCreators, dispatch);

  return (
    <Collapse in={isAlertOpen}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                openAlert(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Post has been added successfully!
        </Alert>
      </Collapse>
  )
}

export default AlertSuccess;