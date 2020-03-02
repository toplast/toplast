export function validateParams({
  user,
  period,
  limit,
}: {
  [name: string]: string;
}): boolean {
  return Boolean(user && period && limit);
}
