const { render, screen } = require('@testing-library/react');
const MainHeader = require('./MainHeader');

test('renders MainHeader component', () => {
	render(<MainHeader />);
	const headerElement = screen.getByText(/Main Header/i);
	expect(headerElement).toBeInTheDocument();
});