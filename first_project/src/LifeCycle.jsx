import React, { Component } from "react";

// Main App component to demonstrate the LifecycleDemo component
export class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    // 1. Constructor: Runs first, before the component is mounted.
    // Use it to initialize state.
    this.state = {
      internalCount: 0,
    };
    console.log(
      "1. Constructor: Component is being created."
    );
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    // 2. static getDerivedStateFromProps: Called before render,
    // when props or state change. It's static and cannot access 'this'.
    // Use it to update state based on prop changes.
    console.log(
      "2. static getDerivedStateFromProps: Checking for prop/state changes before render."
    );
    if (nextProps.propCount !== prevState.prevPropCount) {
      // Example: Reset internalCount if the propCount changes
      return {
        internalCount: 0,
        prevPropCount: nextProps.propCount,
      };
    }
    return null; // No state update needed
  }

  componentDidMount() {
    // 4. componentDidMount: Runs once after the component is rendered
    // to the browser for the first time.
    // Ideal for data fetching, setting up subscriptions.
    console.log(
      "4. componentDidMount: Component has been added to the page."
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    // 5. shouldComponentUpdate: Called before re-rendering on updates.
    // Return true to re-render, false to skip.
    // Useful for performance optimization.
    console.log(
      "5. shouldComponentUpdate: Deciding whether to re-render."
    );
    // For simplicity, we'll always re-render if props or state change.
    // In a real app, you might compare specific parts of nextProps/nextState.
    if (
      nextProps.propCount !== this.props.propCount ||
      nextState.internalCount !== this.state.internalCount
    ) {
      return true; // Re-render
    }
    return false; // Do not re-render
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // 6. getSnapshotBeforeUpdate: Called just before React updates the DOM.
    // Captures current scroll position or other DOM state before changes.
    // The returned value is passed to componentDidUpdate.
    console.log(prevState);
    console.log(
      "6. getSnapshotBeforeUpdate: Capturing a snapshot before DOM updates."
    );
    return null; // For simplicity, not capturing anything specific
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // 7. componentDidUpdate: Runs after the component has updated (re-rendered).
    // Ideal for side effects after state/prop changes, like data fetching
    // based on new props.

    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    console.log("snapshot", snapshot);
    console.log(
      "7. componentDidUpdate: Component has finished updating."
    );
  }

  componentWillUnmount() {
    // 8. componentWillUnmount: Runs just before the component is removed
    // from the DOM.
    // Essential for cleanup: clearing timers, cancelling network requests, etc.
    console.log(
      "8. componentWillUnmount: Component is about to be removed."
    );
  }

  render() {
    // 3. Render: The only required method. It describes what the component
    // looks like. It reads props and state and returns JSX.
    console.log("3. Render: Component is drawing itself.");

    return (
      <div className="flex flex-col items-center">
        <p className="text-xl text-gray-700 mb-2">
          Prop Count:{" "}
          <span className="font-semibold text-blue-600">
            {this.props.propCount}
          </span>
        </p>
        <p className="text-xl text-gray-700">
          Internal State Count:{" "}
          <span className="font-semibold text-purple-600">
            {this.state.internalCount}
          </span>
        </p>
        <button
          onClick={() => {
            console.log(
              "   (Button Click) Updating internal state."
            );
            this.setState((prevState) => ({
              internalCount: prevState.internalCount + 1,
            }));
          }}
          className="mt-6 bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75 transition duration-300 ease-in-out">
          Increment Internal Count
        </button>
      </div>
    );
  }
}
