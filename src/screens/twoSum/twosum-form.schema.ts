import {z} from 'zod';

export const TwoSumFormSchema = z.object({
  number: z.coerce
    .number({
      required_error: 'Please enter a valid number!',
      invalid_type_error: 'Please enter a valid number!',
    })
    .refine(val => (isNaN(val) ? false : val), {
      message: 'The value must be a valid number!',
    })
    .optional(),
  target: z.coerce
    .number({
      required_error: 'Please enter a valid number!',
      invalid_type_error: 'Please enter a valid number!',
    })
    .refine(val => (isNaN(val) ? false : val), {
      message: 'The value must be a valid number!',
    }),
});

export type TwoSumFormSchemaType = z.infer<typeof TwoSumFormSchema>;
