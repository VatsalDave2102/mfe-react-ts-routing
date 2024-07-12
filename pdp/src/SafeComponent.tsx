import React, { PropsWithChildren } from "react";

// Interface to define the state of the SafeComponent
interface SafeComponentState {
	hasError: boolean;
}

// A React component that catches and handles errors in its child components
export default class SafeComponent extends React.Component<
	PropsWithChildren,
	SafeComponentState
> {
	// Initializes the component with an initial state of no error
	constructor(props: PropsWithChildren) {
		super(props);
		this.state = { hasError: false };
	}

	// Updates the state to indicate an error has occurred when an error is thrown
	static getDerivedStateFromError(error: Error) {
		return { hasError: true };
	}

	// Called when an error is caught. Can be used to log the error or perform other error handling
	componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {}

	// Renders the component. If an error has occurred, renders a fallback error message
	render(): React.ReactNode {
		// If an error has occurred, render a fallback error message
		if (this.state.hasError) {
			return <h1>Something went wrong</h1>;
		}

		// Otherwise, render the child components
		return this.props.children;
	}
}
