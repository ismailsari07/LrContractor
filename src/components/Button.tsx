import classNames from "classnames";

function Button(props: any) {
    let {text, variant = 'default'} = props;
    return (
        <button className={classNames({
            "p-4 h-10 flex items-center justify-center rounded" : true,
            "bg-gray-200" : variant === "default",
            "bg-green-500" : variant === "success",
            "bg-yellow-500" : variant === "warning",
            "bg-red-500" : variant === "danger",
        })}>{text}</button>
    )
}

export default Button;