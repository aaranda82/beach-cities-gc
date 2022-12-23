export const ErrorText = ({ error }: { error: string | undefined }) =>
  error ? <p className="text-red-600 text-lg">{error}</p> : null;
