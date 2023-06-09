export const getActiveStyle = ({isActive})=> ({
    textDecoration: isActive ? "underline" : "none",
    fontWeight: isActive ? 'bolder' : '',
  })