export const getActiveNab = ({isActive})=> ({
    textDecoration: isActive ? "underline" : "none",
    fontWeight: isActive ? 'bolder' : '',
    color: isActive ? '#384c54' : 'black' 
  })