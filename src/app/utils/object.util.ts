export module ObjectUtil {
  export const from = (arr: [string, any][]) => {
    const obj: { [p: string]: any } = {};
    arr.forEach(([k, v]) => obj[k] = v)
    return obj;
  }
}
