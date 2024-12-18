interface CheckBoxProps {
  id?: string;
  name?: string;
  label?: string;
  checked: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  styleClasses?: string;
}
