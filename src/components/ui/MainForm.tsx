"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

// schema defines for the name of the input fields, what is it we expect so that we can validate easily; e.g. for the field named "inputArea", must be string
const schema = z.object({
  inputArea: z.string(),
});

// Type of the form is then inferred from the schema
type FormFields = z.infer<typeof schema>;

export default function MainForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    defaultValues: {
      inputArea: "Paste original message here",
    },
    resolver: zodResolver(schema),
  });

  const [output, setOutput] = useState("");

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data.inputArea);

    // TODO: Replace with the returned value from the api call
    setOutput(data.inputArea);
  };

  // register is used to say "for this field, im registering it as one of the names i specified in the FormFields"
  return (
    <>
      <form className="flex flex-col gap-y-2" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("inputArea")} />
        {errors.inputArea && (
          <div className="text-red-500">{errors.inputArea.message}</div>
        )}
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Loading..." : "Submit"}
        </button>
      </form>
      <textarea value={output} readOnly />
    </>
  );
}
