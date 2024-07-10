import React, { PropsWithChildren } from "react";

interface SafeComponentState {
	hasError: boolean;
}
export default class SafeComponent extends React.Component<
	PropsWithChildren,
	SafeComponentState
> {
	constructor(props: PropsWithChildren) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error: Error) {
		return { hasError: true };
	}

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {}

	render(): React.ReactNode {
		if (this.state.hasError) {
			return <h1>Something went wrong</h1>;
		}

		return this.props.children;
	}
}
