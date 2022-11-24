import { Alert, IconButton, Collapse } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { IProps } from "../../utils/interfaces";

const AlertSuccess: React.FC<IProps> = ({ open, setOpen }) => {

  return (
    <Collapse in={open.alert}>
      <Alert
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              setOpen({ ...open, alert: false });
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
  );
};

export default AlertSuccess;
