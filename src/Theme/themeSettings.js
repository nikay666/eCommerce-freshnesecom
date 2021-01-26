import { createMuiTheme } from "@material-ui/core/styles";


export const createTheme  = () => {
      return createMuiTheme({
        palette: {
          type: 'light',
          primary: {
            light: '#C8DEB3',
            main: '#6A983C',
            dark: '#46760A',

          },
          secondary: {
            light: '#C8DEB3',
            main: '#6A983C',
            dark: '#46760A',
          },
          error: {
            light: '#e57373',
            main: '#f44336',
            dark: '#d32f2f'
          },
          warning: {
            light: '#ffb74d',
            main: '#ff9800',
            dark: '#f57c00'
          },
          info: {
            light: '#64b5f6',
            main: '#2196f3',
            dark: '#1976d2',
          },
          success: {
            light: '#81c784',
            main: '#4caf50',
            dark: '#388e3c'
          },
          text: {

          }
        }
      })
}