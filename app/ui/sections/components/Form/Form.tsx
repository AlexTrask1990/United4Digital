"use client";

import { useState, useRef } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import "react-phone-number-input/style.css";
import { yupResolver } from "@hookform/resolvers/yup";
import ReCAPTCHA from "react-google-recaptcha";
import { CFormKeys, IFormData } from "@/app/types/definitions";
import { schema } from "@/app/types/modelValidations";
import { Button } from "@/app/ui/Button/Button";
import { LinkedIn } from "@/app/ui/Social";
import { sendMail } from "@/app/lib/actions";
import Loading from "@/app/ui/Loading/Loading";
import SuccessMessage from "@/app/ui/SuccessMessage/SuccessMessage";

export default function Form() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<IFormData> = async (data) => {
    setIsLoading(true);
    const response = await sendMail(data);
    if (response.ok) {
      setIsLoading(false);
      setSuccess(true);
      reset({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        company: "",
        subject: "",
        recaptcha: "",
        message: "",
      });
      recaptchaRef.current?.reset();
    } else {
      setSuccess(false);
      setIsLoading(false);
    }
  };

  return (
    <div className="relative w-full bg-white rounded-md p-4 laptop:p-12 max-w-[792px] order-2 widescreen:order-1">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="laptop:flex laptop:justify-between">
          {/* *** First Name *** */}
          <label className="form-control w-full laptop:min-w-[300px] tablet:mr-4">
            <div className="label">
              <span className="font-medium">
                First Name<span className="text-error">*</span>
              </span>
            </div>
            <input
              type="text"
              className={`input rounded-md w-full ${
                errors.firstName && "input-error animate-pulse"
              }`}
              {...register(CFormKeys.FIRST_NAME, {
                required: true,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
          </label>
          {/* *** Last Name *** */}
          <label className="form-control w-full laptop:min-w-[300px]">
            <div className="label">
              <span className="font-medium">
                Last Name<span className="text-error">*</span>
              </span>
            </div>
            <input
              type="text"
              className={`input rounded-md w-full ${
                errors.lastName && "input-error animate-pulse"
              }`}
              {...register(CFormKeys.LAST_NAME, {
                required: true,
                pattern: /^[A-Za-z]+$/i,
              })}
            />
          </label>
        </div>

        <div className="laptop:flex laptop:justify-between">
          {/* *** Email *** */}
          <label className="form-control w-full laptop:min-w-[300px] tablet:mr-4">
            <div className="label">
              <span className="font-medium">
                Email<span className="text-error">*</span>
              </span>
            </div>
            <input
              type="text"
              className={`input rounded-md w-full ${
                errors.email && "input-error animate-pulse"
              }`}
              {...register(CFormKeys.EMAIL, { required: true })}
              aria-invalid={errors.email ? "true" : "false"}
            />
          </label>
          {/* *** Phone Number *** */}
          <label className="form-control w-full laptop:min-w-[300px] relative">
            <div className="label">
              <span className="font-medium">Phone Number</span>
            </div>
            <PhoneInputWithCountry
              name={CFormKeys.PHONE_NUMBER}
              defaultCountry="GB"
              international
              countryCallingCodeEditable={false}
              control={control}
              rules={{ required: true }}
              withCountryCallingCode={true}
              className="input rounded-md w-full"
            />
          </label>
        </div>
        {/* *** Company *** */}
        <label className="form-control w-full">
          <div className="label">
            <span className="font-medium">Company</span>
          </div>
          <input
            type="text"
            className="input rounded-md w-full"
            {...register(CFormKeys.COMPANY, { required: false })}
          />
        </label>
        {/* *** Subject *** */}
        <label className="form-control w-full">
          <div className="label">
            <span className="font-medium">Subject</span>
          </div>
          <input
            type="text"
            className="input rounded-md w-full"
            {...register(CFormKeys.SUBJECT, { required: false })}
          />
        </label>
        {/* *** Message *** */}
        <label className="form-control">
          <div className="label">
            <span className="font-medium">Message</span>
          </div>
          <textarea
            className="textarea rounded-md h-24"
            {...register(CFormKeys.MESSAGE, { required: false })}
          ></textarea>
        </label>

        <Controller
          name={CFormKeys.RECAPTCHA}
          control={control}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
              onChange={onChange}
              className="pt-8"
            />
          )}
        />
        {errors.recaptcha && (
          <p className="absolute text-error">{errors.recaptcha.message}</p>
        )}

        <div className="flex justify-between pt-8">
          <Button label={"Submit"} type={"submit"} className="w-[170px] btn-secondary" />
          <div className="flex items-center">
            <LinkedIn
              fill={"var(--color-primary)"}
              className="hover:bg-gray-100"
            />
          </div>
        </div>
      </form>
      {isLoading && <Loading />}
      {success && (
        <SuccessMessage
          message={
            "Thank you for contacting us! Your message has been successfully sent. We will get back to you as soon as possible."
          }
          success={success}
          onClose={setSuccess}
        />
      )}
    </div>
  );
}
