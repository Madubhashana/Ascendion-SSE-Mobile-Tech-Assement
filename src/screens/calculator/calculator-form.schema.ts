import {z} from 'zod';

export const CalculatorFormSchema = z.object({
  inputOne: z.coerce
    .number({
      required_error: 'The first number is required!',
      invalid_type_error: 'The value must be a valid number!',
    })
    .refine(val => (isNaN(val) ? false : val), {
      message: 'The value must be a valid number!',
    }),
  inputTwo: z.coerce
    .number({
      required_error: 'The first number is required!',
      invalid_type_error: 'The value must be a valid number!',
    })
    .refine(val => (isNaN(val) ? false : val), {
      message: 'The value must be a valid number!',
    }),
});

export type CalculatorFormSchemaType = z.infer<typeof CalculatorFormSchema>;
