interface ButtonProps
  extends ChildrenJsxProp,
    StylesProp,
    VariantProp,
    IsSubmitProp,
    OnClickProp,
    DisabledProp,
    IsLoadingProp {
  startIcon?: string;
  endIcon?: string;
  path?: string;
}
