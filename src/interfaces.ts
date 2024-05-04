export interface Connection {
    id: string;
    name: string;
    username: string;
    type: string;
  }

  export interface ConnectionDetail {
    id: string;
    name: string;
    url: string;
    username: string;
    password: string;
    type: string;
  }

  export interface IFormInput {
    name: string;
    url: string;
    username: string;
    password: string;
    type: string;
  }