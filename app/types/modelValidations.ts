import * as yup from "yup";
import { isRecaptchaEnabled } from "@/app/lib/recaptcha";
import { CFormKeys } from "./definitions";

export const schema = yup
  .object({
    [CFormKeys.FIRST_NAME]: yup
      .string()
      .matches(/^[A-Za-z]+$/, "Only letters are allowed")
      .required("First name is required"),
    [CFormKeys.LAST_NAME]: yup
      .string()
      .matches(/^[A-Za-z]+$/, "Only letters are allowed")
      .required("Last name is required"),
    [CFormKeys.EMAIL]: yup
      .string()
      .email("Must be a valid email")
      .required("Email is required"),
    [CFormKeys.PHONE_NUMBER]: yup.string().max(15, "Phone number must be at most 15 characters."),
    [CFormKeys.COMPANY]: yup.string().max(50, "Company name must be at most 50 characters."),
    [CFormKeys.SUBJECT]: yup.string().max(50, "Subject must be at most 50 characters."),
    [CFormKeys.MESSAGE]: yup.string().max(500, "Message must be at most 500 characters."),
    [CFormKeys.RECAPTCHA]: isRecaptchaEnabled
      ? yup
          .string()
          .required("You must confirm that you are not a robot")
      : yup.string().optional(),
  })
  .required();
