const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className="w-full max-w-[500px] py-2">
      <input className="w-full" {...props} />
    </div>
  );
};

export default Input;
