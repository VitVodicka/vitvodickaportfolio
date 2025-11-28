import { createVuetify, type ThemeDefinition } from "vuetify";
import 'vuetify/styles'

const customLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#101922',
    itemsPrimary: '#137fec',
    itemsSecondary: '#101922',
    itemsTertiary: '#374151',
    textPrimary: '#FFFFFF',
    textSecondary: '#B0B0B0',
  },
}

export const vuetifyTheme = createVuetify({
  theme: {
    defaultTheme: 'customLightTheme',
    themes: {
      customLightTheme,
    },
  },
  defaults: {
    global: {
      style: {
        fontFamily: 'Roboto, sans-serif',
      },
    },
  },  
});