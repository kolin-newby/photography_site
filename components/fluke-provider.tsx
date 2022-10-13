import React, {Dispatch, ReactElement, useReducer} from "react";

export const FlukeStateContext = React.createContext<FlukeState>({
    photos: []
});
export const FlukeDispatchContext = React.createContext<Dispatch<any>>(useFlukeDispatch);

export interface FlukeState {
    photos: string[]
};

export const FlukeInitialState: FlukeState = {
    photos: [
        "./../../public/photos/DJI_0065.jpg",
        "/photos/DJI_0099-HDR.jpg",
        "./../public/photos/KBN00826.jpg",
        "./../public/photos/KBN02017.jpg",
        "./../public/photos/KBN02142.jpg",
        "./../public/photos/KBN02251.jpg",
        "./../public/photos/KBN02264.jpg",
        "./../public/photos/KBN03812.jpg",
        "./../public/photos/KBN04181.jpg",
        "./../public/photos/KBN04220.jpg",
        "./../public/photos/KBN01858.jpg",
        "./../public/photos/KBN04465.jpg",
        "./../public/photos/KBN04479.jpg",
        "./../public/photos/KBN04765.jpg",
        "./../public/photos/KBN04780.jpg"
    ]
};

export default function FlukeProvider({ children }: {children: ReactElement}) {
    const [state, dispatch] = useReducer(reducer, FlukeInitialState, init);

    function init(initialState: FlukeState) {
        return initialState;
    }

    function reducer(state: FlukeState, action: { type: any; payload: FlukeState; }): FlukeState {
        switch (action.type) {
            case "put":
                return {
                    ...state,
                    ...action.payload,
                };

            case "reset":
                return init(FlukeInitialState);

            default:
                return {
                    ...state,
                };
        }
    }

    return (
        <FlukeStateContext.Provider value={state}>
            <FlukeDispatchContext.Provider value={dispatch}>
                {children}
            </FlukeDispatchContext.Provider>
        </FlukeStateContext.Provider>
    );
}

export function useFlukeState() {
    const context = React.useContext(FlukeStateContext);
    if (context === undefined) {
        throw new Error("useFlukeState must be used within a FlukeProvider");
    }
    return context;
}

export function useFlukeDispatch() {
    const context = React.useContext(FlukeDispatchContext);
    if (context === undefined) {
        throw new Error("useFlukeDispatch must be used within a FlukeProvider");
    }
    return context;
}

export function useFluke() {
    return [useFlukeState(), useFlukeDispatch()];
}