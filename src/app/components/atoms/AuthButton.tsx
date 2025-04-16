type AuthButtonProps = {
  label: string;
  variant?: "primary" | "outline";
};

const AuthButton = ({ label, variant = "primary" }: AuthButtonProps) => {
  const base = "px-5 py-2 rounded-md font-medium text-sm transition";
  if (variant === "outline") {
    return (
      <button
        className={`${base} border border-white hover:bg-white hover:text-black`}
      >
        {label}
      </button>
    );
  }
  return (
    <button className={`${base} bg-indigo-600 hover:bg-indigo-700`}>
      {label}
    </button>
  );
};

export default AuthButton;
