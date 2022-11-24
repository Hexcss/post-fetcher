export interface IProps {
  open: IOpen;
  setOpen: React.Dispatch<React.SetStateAction<IOpen>>;
}

export interface IOpen {
    form: boolean;
    alert: boolean;
    sidebar: boolean;
    formPopup: boolean;
    edit: boolean;
    snackbar: boolean;
  }