export interface TitledAlertProps {
  title: string | JSX.Element;
  text: string | JSX.Element;
  type: 'error' | 'warning' | 'success';
  onClose?: () => void;
}
