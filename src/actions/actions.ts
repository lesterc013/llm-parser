"use server";

import { MainFormShape } from "@/schemas/schemas";

// handleSubmit will pass in a variable that should be of MainFormShape
// When this function is called, the data is api mocked, and we get the return value and log it
export async function callOpenAiApi(data: MainFormShape) {
  const result = await new Promise((resolve) =>
    setTimeout(() => {
      const pastedData = data.inputArea;
      resolve(pastedData);
    }, 1000)
  );
  console.log("This was what is passed in: " + result);
}
