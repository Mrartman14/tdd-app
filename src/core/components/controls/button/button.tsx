export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    //
}

function Button(props: ButtonProps): JSX.Element {
    return (
        <button {...props}>
            {props.children}
        </button>
    );
}

export {
    Button,
};