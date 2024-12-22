import { useActionFeedback } from "./hooks/use-action-feedback";
import { toast } from "sonner";
import { ActionState } from "./utils/to-action-state";

type FormProps = {
    action: (payload: FormData) => void;
    actionState: ActionState;
    children: React.ReactNode;
    onSuccess?: (actionState: ActionState) => void;
    onError?: (actionState: ActionState) => void;
};

const Form = ({ 
    action, 
    actionState, 
    children, 
    onSuccess, 
    onError 
}: FormProps) => {
    useActionFeedback(actionState, {
        onSuccess: ({actionState}) => {
          toast.success(actionState.message);
        },
        onError: ({actionState}) => {
          toast.error(actionState.message);
      }});
    return (
        <form  action={action} className="flex flex-col gap-y-2">
            { children }
        </form>
    );
};

export { Form };