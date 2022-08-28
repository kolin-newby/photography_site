import React, {Dispatch, ReactElement, useReducer} from "react";
import {StaticImageData} from "next/image";

import photo1 from "./../public/photos/DJI_0065.jpg";
import photo2 from "./../public/photos/DJI_0099-HDR.jpg";
import photo3 from "./../public/photos/KBN00826.jpg";
import photo4 from "./../public/photos/KBN02017.jpg";
import photo5 from "./../public/photos/KBN02142.jpg";
import photo6 from "./../public/photos/KBN02251.jpg";
import photo7 from "./../public/photos/KBN02264.jpg";
import photo8 from "./../public/photos/KBN03812.jpg";
import photo9 from "./../public/photos/KBN04181.jpg";
import photo10 from "./../public/photos/KBN04220.jpg";
import photo11 from "./../public/photos/KBN01858.jpg";
import photo12 from "./../public/photos/KBN04465.jpg";
import photo13 from "./../public/photos/KBN04479.jpg";
import photo14 from "./../public/photos/KBN04765.jpg";
import photo15 from "./../public/photos/KBN04780.jpg";

export const FlukeStateContext = React.createContext<FlukeState>({
    photos: []
});
export const FlukeDispatchContext = React.createContext<Dispatch<any>>(useFlukeDispatch);

export interface FlukeState {
    photos: StaticImageData[]
};

export const FlukeInitialState: FlukeState = {
    photos: [
        photo1,
        photo2,
        photo3,
        photo4,
        photo5,
        photo6,
        photo7,
        photo8,
        photo9,
        photo10,
        photo11,
        photo12,
        photo13,
        photo14,
        photo15
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