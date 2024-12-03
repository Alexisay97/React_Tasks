interface SelectVanillaProps {
  id: string,
  name: string,
  label?: string | null;
  options: {label:string, value:string}[]; 
  catalog?: string | null;
  value: string;
  onChange: (value: string | number | any, label: string) => void;
  placeholder?: string;
  styleClasses?: string;
  classNameSelect?: string;
  isRequired?: boolean;
  disabled?: boolean;
  filter?: string | null;
  error?: string;
  errorMessage?: string;
}
