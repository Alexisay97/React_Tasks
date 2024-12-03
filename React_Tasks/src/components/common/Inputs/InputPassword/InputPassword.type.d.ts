interface InputPasswordProps
  extends NameProp,
    StylesProp,
    DisabledProp,
    PlaceholderProp,
    LabelProp,
    IdProp,
    ErrorProp,
    ErrorMessageProp,
    ValueProp {
  classNameInput?: string;
  isRequired?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}
