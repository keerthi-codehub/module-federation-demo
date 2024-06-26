import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@bridgestone/ui/';
/**
 * @param  {} {children}
 */
const AllTheProviders = ({ children }) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
/**
 * @param  {} ui
 * @param  {} options
 */
const customRender = (ui, options) =>
	render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
