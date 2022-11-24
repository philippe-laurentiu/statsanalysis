export const dateStringToDate = (str: string): Date => {
  const da = str.split('/').map((ds: string) => parseInt(ds))
  return new Date(da[2],da[1] - 1,da[0])
}