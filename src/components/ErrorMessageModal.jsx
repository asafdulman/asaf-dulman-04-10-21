export function ErrorMessageModal({ message, show }) {
    return (
        <div className={show ? "error-message-modal-box open" : "error-message-modal-box"}>
            <p>{message}</p>
        </div>
    )
}