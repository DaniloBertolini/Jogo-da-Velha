import './square.css'

type TypeSquare = {
    value: string,
    onClick: () => void,
    className: string,
    dark: boolean
}

function Square({ value, onClick, className, dark }: TypeSquare) {
    return (
        <button
        onClick={ onClick }
        className={`${className} ${value} ${dark ? 'dark' : 'light'}`}>
            {value}
        </button>
    )
}

export default Square;