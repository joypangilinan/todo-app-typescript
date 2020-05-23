export default (payload, joiSchema) => {
  return joiSchema.validate(payload, {
    abortEarly: false,
    errors: {
      label: "key",
    },
  });
};
