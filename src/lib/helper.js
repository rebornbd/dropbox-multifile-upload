export const formatByte = (bytes, decimals = 2) => {
  if (!+bytes) return "0 bytes";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["bytes", "kb", "mb", "gb", "tb", "pb", "eb", "zb", "yb"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

export const isGreaterThanMaxLimitMB = (size, maxMB=5) => {
  const maxSize = maxMB * 1024 * 1024;
  return maxSize < size
    ? true
    : false;
}
