/***********************
 * App.js
 ************************/

export const appWrapper = {
  display: 'flex',
  height: '100vh',
  overflow: 'hidden',
};

export const flexAlignCenter = {
  display: 'flex',
  alignItems: 'center',
};

/***********************
 * Navigation
 ************************/

export const searchBar = {
  display: 'flex',
  alignItems: 'center',
  width: { md: 410, sm: 410 },
  height:37,
  boxShadow: 0,
  border: '1px solid #ccc',
  borderRightColor: 'transparent',
  borderRadius:6
};

export const appBar = {
  backgroundColor: 'white',
  color: '#000',
};

export const toolbarWrapper = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems:'center',
  flexGrow: 1,
};

export const logoText = {
  fontSize: 22,
  ml: 0.2,
  fontFamily: 'Oswald',
  fontWeight:500,
  letterSpacing:"-1px",
};
export const logoTextin = {
  fontSize: 10,
  mb: 2.5,
  ml:0.5,
  fontWeight:300,
};

