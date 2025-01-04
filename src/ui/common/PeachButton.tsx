import "./common.css"

interface PeachButtonProps {
    text: string,
    onClick: () => void,
}

export const PeachButton = (props: PeachButtonProps) => {
    return <button className="btn peachButton" onClick={props.onClick}>
        {props.text}
    </button>
}