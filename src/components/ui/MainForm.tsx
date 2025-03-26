"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { mainFormSchema } from "@/schemas/schemas";
import { MainFormShape } from "@/schemas/schemas";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { callOpenAiApi } from "@/actions/actions";

export default function MainForm() {
  const form = useForm<MainFormShape>({
    resolver: zodResolver(mainFormSchema),
    defaultValues: {
      inputArea: "",
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(callOpenAiApi)}
        className="w-2/3 space-y-6"
      >
        <FormField
          control={form.control}
          name="inputArea"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Original WhatsApp Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Paste full WhatsApp Message here"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
