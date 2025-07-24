// prettier-ignore
export const makeClassName = (setting: string, _className?: string, numberOfLines?: number) =>
  [setting, numberOfLines ? `line-clamp-${numberOfLines}` : '', _className].join(' ')

// "P-4" "text-3xl" 3
// 결과 className : "p-4 text-3xl line-clamp-3"

// export const makeClassName = (
//   setting: string,
//   _className?: string,
//   numberOfLines?: number
// ) =>
//   [
//     setting,
//     numberOfLines ? `line-clamp-${numberOfLines}` : "",
//     _className,
//   ].join("");
