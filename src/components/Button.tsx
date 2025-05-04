import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode,
  background: 'green' | 'white',  
};

export const Button = ({ children, background }: ButtonProps) => {
  return (
    <div 
        className={clsx(
            "flex items-center justify-center gap-2 px-6 py-4 font-medium text-base rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-300",
            background === 'green' ? "bg-button-bg text-white" : "bg-button-bg2 text-text",
        )}
    >
        {children}
    </div>
  );
};