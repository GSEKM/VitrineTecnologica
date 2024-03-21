import { AiFillCloseCircle } from "react-icons/ai";

interface ModalProps {
    onClose: () => void;
    title: string;
    body: React.ReactNode;
}

export function TrlModal(props: ModalProps) {
    const { onClose, title, body } = props;

    return (
        <div className="absolute rounded bg-slate-200 shadow">
            <div className="flex row justify-between mx-8">
                <h1>{title}</h1>
                <button className="close-btn" onClick={onClose}>
                    <AiFillCloseCircle size={30} />
                </button>
            </div>
            <div className="modal-body">{body}</div>
        </div>
    );
}