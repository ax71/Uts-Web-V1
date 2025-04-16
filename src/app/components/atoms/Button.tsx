interface ButtonProps {
  children: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => (
  <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg transition">
    {children}
  </button>
);

export default Button;
