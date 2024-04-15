import { Argument } from "classnames";

declare global {
  type CX = (...args: Argument[]) => string;
}

export enum CommonFields {
  NAME = "name",
  HREF = "href",
  SRC = "src",
  ALT = "alt",
  TEXT = "text",
}

export enum CFormKeys {
  FIRST_NAME = "firstName",
  LAST_NAME = "lastName",
  EMAIL = "email",
  PHONE_NUMBER = "phoneNumber",
  COMPANY = "company",
  SUBJECT = "subject",
  MESSAGE = "message",
  RECAPTCHA = "recaptcha",
}

export type IFormData = {
  [CFormKeys.FIRST_NAME]: string;
  [CFormKeys.LAST_NAME]: string;
  [CFormKeys.EMAIL]: string;
  [CFormKeys.PHONE_NUMBER]?: string;
  [CFormKeys.COMPANY]?: string;
  [CFormKeys.SUBJECT]?: string;
  [CFormKeys.MESSAGE]?: string;
  [CFormKeys.RECAPTCHA]: string;
};

export type ILink = {
  [CommonFields.NAME]: string;
  [CommonFields.HREF]: string;
};

export interface IOfferList {
  [CommonFields.SRC]: string;
  [CommonFields.ALT]: string;
  [CommonFields.TEXT]: string;
}
