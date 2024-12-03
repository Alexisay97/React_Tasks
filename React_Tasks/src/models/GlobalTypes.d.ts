interface NameProp {
    name: string;
  }
  interface TitleProp {
    title: string;
  }
  interface TextProp {
    text?: string;
  }
  interface ColorProp {
    color?: ColorsFonts;
  }
  interface IconProp {
    icon?: string;
  }
  interface IconColorProp {
    iconColor: ColorsFonts;
  }
  interface CommentProp {
    comment: string | boolean;
  }
  interface ChildrenJsxProp {
    children?: React.ReactNode | React.ReactNode[];
  }
  interface BackgroundColorProp {
    background?: ColorsFonts;
  }
  interface StylesProp {
    styleClasses?: string;
  }
  interface PaddingProp {
    padding?: string;
  }
  interface VariantProp {
    variant?: 'primary' | 'secondary' | 'danger' | 'custom';
  }
  interface IsSubmitProp {
    isSubmit?: boolean;
  }
  interface OnClickProp {
    onClick?: () => void;
  }
  interface OnChangeProp {
    onChange: (value: any, action: ActionMeta<any> | null) => void;
  }
  interface DisabledProp {
    disabled?: boolean;
  }
  interface VisibleProp {
    visible?: boolean;
  }
  interface IsSelectedProp {
    isSelected?: boolean;
  }
  interface IsLoadingProp {
    isLoading?: boolean;
  }
  interface PlaceholderProp {
    placeholder: string;
  }
  interface LabelProp {
    label?: string;
  }
  interface IdProp {
    id?: string;
  }
  interface ErrorProp {
    error?: boolean | string;
  }
  interface ErrorMessageProp {
    errorMessage?: string;
  }
  interface ValueProp {
    value: string;
  }
  interface InfoBoxProps extends ColorProp {
    label: string;
    value: string | number;
    fontSize?: SizesFonts;
  }
  interface CobrosDetails {
    label: string;
    value: string;
    isMoney?: boolean;
  }
  interface CantidadDinero {
    cantidad: string | number;
    bg?: string;
  }
  interface IngresoCantidad {
    title: string;
    values: CantidadDinero[];
  }
  
  interface BoxProps {
    iconStart: string;
    title: string;
    description: string;
    iconEnd: string;
    redirectTo: string;
    permission: boolean;
    disabled: boolean;
  }
  
  interface TabPrincipal {
    id: number;
    name: string;
    icon: string;
    isDisabled?: boolean;
  }
  
  interface InfoColumns {
    id: number;
    nombre: string;
    icon?: string;
    hijos: any;
  }
  
  interface IValues {
    id: number;
    value: string;
  }
  interface RowDataRecepcion {
    id: number;
    nOrdenes: string;
    usuario: string;
    almacen: string;
    tipoSolicitud: string;
    fCreacion: string;
    diasCreacion: number;
    estado: string;
  }
  
  interface TotalOrdenes {
    CantidadOrdenes: number;
    nombre: string;
    TotalOrdenes?: number;
  }
  