import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActivityStatus } from "../../common/enums";
import personActions from "../../store/person/person.actions";
import { RootReducersInterface } from "../../store/store.reducers";

const usePersonHook = (username: string) => {
  const dispatch = useDispatch();
  const personState = useSelector(
    (rootReducer: RootReducersInterface) => rootReducer.personReducer.person
  );
  // Initiate loading status
  const [isLoading, setLoading] = React.useState(
    personState.activity === ActivityStatus.Loading
  );

  /**
   * Handle fetch personal details
   */
  const fetchPersonalInformation = () => {
    dispatch(personActions.fetchPersonalDetails(username));
  };

  useEffect(() => {
    if (!isLoading && personState.payload!.login !== username) {
      setLoading(true);
      fetchPersonalInformation();
    }
  }, [username]);

  useEffect(() => {
    setLoading(personState.payload!.login === undefined);
  }, [isLoading]);

  /**
   * Handle go back to home page
   */
  const [buttonProps, _] = React.useState({ to: "/" });

  return {
    isLoading,
    personState,
    buttonProps,
  };
};

export default usePersonHook;
