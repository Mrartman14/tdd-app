interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    //
}

function Input(props: InputProps): JSX.Element {
    return (
        <input {...props} />
    );
}

export {
    Input,
};