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
      fetchPersonalInformation();
    }
  }, [username]);

  useEffect(() => {
    console.log(personState.activity);

    if (personState.activity === ActivityStatus.Loading) {
      setLoading(true);
    } else {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  }, [username, personState.activity]);

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
