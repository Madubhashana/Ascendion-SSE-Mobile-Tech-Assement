import {z} from 'zod';

export const CalculatorFormSchema = z.object({
  inputOne: z.number({required_error: 'The first number is required!'}),
  inputTwo: z.number({required_error: 'The second number is required!'}),
});

export type CalculatorFormSchemaType = z.infer<typeof CalculatorFormSchema>;
