import React from 'react';

export const AuthContext = React.createContext({
  onLogin: ({ username, token }) => {},
  onLogout: () => {},
  auth: null, // OR {username, token}
});
