import { Alert, IconButton, Collapse } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface IProps {
  isAlertOpen: boolean;
  setIsAlertOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AlertSuccess: React.FC<IProps> = ({ isAlertOpen, setIsAlertOpen }) => {

  return (
    <Collapse in={isAlertOpen}>
      <Alert
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              setIsAlertOpen(false);
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
