import {Dialog} from "@mui/material";
import {ModalHookInterface} from "../../hook/useModal";
import {useEffect} from "react";
interface LazyQueryDialogProps {
    modalValues: ModalHookInterface,
    children: JSX.Element
}
export default (props: LazyQueryDialogProps) => {
    const {modalValues, children} = props;

    useEffect(() => {
        if (!modalValues.visible) return;
        (async () => {
            // await lazyQuery(
            //     {
            //         variables: {
            //             input: {
            //                 id: modalValues.modalId
            //             }
            //         }
            //     });
        })();
    }, [modalValues.visible])

    return <Dialog
        open={modalValues.visible}
        onClose={modalValues.toggle}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        {children}
    </Dialog>
}