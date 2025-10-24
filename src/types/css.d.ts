declare module '*.module' {
  const classes: Readonly<Record<string, string>>

  export default classes
}
