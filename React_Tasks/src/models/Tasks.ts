export interface Task {
  id?: string;
  title: string;
  description: string;
  completed: boolean;
}

export const initialTask = {
  id: "",
  title: "",
  description: "",
  completed: false,
};

export interface Errors {
  title: string;
  description: string;
};

export const initialErrors = {
    title: "",
    description: ""
}
