export interface ErrorBoundaryState {
  hasError: boolean;
  error: string;
  stack: string | undefined;
  componentStack: string | undefined;
}
