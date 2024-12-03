interface ModalProps {
    isOpen: boolean, 
    onClose: () => void,
    title: string;
    color?: string;
    children: React.ReactNode;
  }