import { useEffect, useRef } from "react";
import { ActionState } from "../utils/to-action-state";

type onArgs = {
  actionState: ActionState;
};

type UseActionFeedbackOptions = {
  onSuccess?: (onArgs: { actionState: ActionState }) => void;
  onError?: (onArgs: { actionState: ActionState }) => void;
};

const useActionFeedback = (
  actionState: ActionState,
  options: UseActionFeedbackOptions
) => {
  const previousTimestamp = useRef(actionState.timestamp);
  const isUpdate = previousTimestamp.current !== actionState.timestamp;

  useEffect(() => {
    if (!isUpdate) {
      return;
    }

    if (actionState.status === "SUCCESS") {
      options.onSuccess?.({ actionState });
    }

    if (actionState.status === "ERROR") {
      options.onError?.({ actionState });
    }

    previousTimestamp.current = actionState.timestamp;
  }, [isUpdate, actionState, options]);
};

export { useActionFeedback };
