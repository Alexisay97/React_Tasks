interface InputTextProps
  extends PlaceholderProp,
    LabelProp,
    NameProp,
    IdProp,
    DisabledProp,
    ErrorProp,
    ErrorMessageProp,
    ValueProp,
    StylesProp {
  type?: string;
  icon?: string;
  classNameInput?: string;
  mask?: string;
  isRequired?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  maxLength?: number;
  onKeyDownAction?: (e: any) => void;
}
