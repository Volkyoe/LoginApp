export const OK = (res, code, doc) => res.status(code).json(doc);

export const Error = (res, code, { message }) =>
  res.status(code).json({ message });

export const UserNotFound = (res, query) =>
  res.status(404).json({
    message: `Cannot find user with ${Object.entries(query)
      .map(([k, v]) => `['${k}': '${v}']`)
      .join(', ')}.`,
    query,
  });
