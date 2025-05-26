import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode,
  background: 'green' | 'white',  
  showArrow?: boolean,
  type?: 'button' | 'submit' | 'reset',
  disabled?: boolean,
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
};

export const Button = ({ children, background, showArrow = false, type = 'button', disabled = false, onClick }: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        "flex items-center justify-center gap-2 px-6 py-4 font-medium text-base rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-300",
        background === 'green' ? "bg-button-bg text-white" : "bg-button-bg2 text-text",
        disabled && "opacity-60 cursor-not-allowed"
      )}
    >
      {children}
      {showArrow && (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.293 12.293L6.707 13.707L13.414 6.99997L6.707 0.292969L5.293 1.70697L9.586 5.99997H0V7.99997H9.586L5.293 12.293Z" fill={background !== 'white' ? "#ECECE6" : "#040000"}/>
        </svg>
      )}
    </button>
  );
};