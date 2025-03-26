/// Will house the form schemas and its associated type/shape

import { z } from "zod";

const mainFormSchema = z.object({
  inputArea: z.string(),
});

type MainFormShape = z.infer<typeof mainFormSchema>;

export { mainFormSchema };
export type { MainFormShape };
