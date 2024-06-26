import Link from "next/link";

interface ButtonProps {
  text: string;
  link: string;
  type?: any;
  containerStyles?: string;
}

const Button: React.FC<ButtonProps> = ({
  type,
  text,
  link,
  containerStyles,
}) => {
  return (
    <button
      type={type}
      className={`${containerStyles} items-center block text-base font-medium text-center text-white transition duration-500 ease-in-out transform  rounded-xl  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
    >
      <Link href={link} rel="noopener noreferrer">
        {text}
      </Link>
    </button>
  );
};

export default Button;