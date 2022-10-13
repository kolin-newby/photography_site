import React, {useCallback, useEffect, useState} from "react";
import { Transition } from '@headlessui/react'
import {photos} from "./photos";
import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function ImageViewer({
    open,
    setOpen,
    imageIndex
}: {
    open: boolean,
    setOpen: Function,
    imageIndex: number
}) {
    const [localIndex, setLocalIndex] = useState(0);

    useEffect(() => {
        setLocalIndex(imageIndex);
    }, [imageIndex])

    const keyFunction = useCallback((event) => {
        if (event.keyCode === 27) setOpen(false);
        if (event.keyCode === 39) nextImage();
        if (event.keyCode === 37) previousImage();
    }, []);

    useEffect(() => {
        document.addEventListener("keydown", keyFunction, false);

        return () => {
            document.removeEventListener("keydown", keyFunction, false);
        };
    }, []);

    function nextImage() {
        setLocalIndex(
            (localIndex + 1) % photos.length
        )
    }

    function previousImage() {
        if (localIndex > 0) {
            setLocalIndex((localIndex - 1) % photos.length);
        } else if (localIndex === 0) {
            setLocalIndex(photos.length - 1);
        }
    }

    return (
        <Transition
            show={open}
            enter="transition-opacity duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-350"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            className={"fixed flex justify-center items-center inset-0 z-50 selection-transparent backdrop-blur " +
                "bg-gray-900 bg-opacity-90"}
        >
            <div className={"flex flex-col items-center rounded-lg bg-black bg-opacity-75 h-5/6 w-10/12 items-center justify-center"}>
                <div className={"flex items-center justify-end w-full"}>
                    <div className={"cursor-pointer flex pr-1 transition-all text-gray-500 hover:text-gray-800"} onClick={() => setOpen(false)}>
                        <FontAwesomeIcon icon={"times"} size={"2x"}/>
                    </div>
                </div>
                <div className={"flex flex-row items-center"}>
                    <div className={"flex px-3 cursor-pointer transition-all text-gray-500 hover:text-gray-800"} onClick={() => previousImage()}>
                        <FontAwesomeIcon icon={"caret-left"} size={"4x"}/>
                    </div>
                    <div className={"flex"}>
                        <Image
                            src={photos[localIndex].src}
                            alt={photos[localIndex].title}
                            height={720}
                            width={1280}
                            // layout={"fill"}
                            objectFit={"contain"}
                            placeholder={"blur"}
                            blurDataURL={photos[localIndex].src}
                            priority={true}
                            quality={100}
                        />
                    </div>
                    <div className={"flex px-3 cursor-pointer transition-all text-gray-500 hover:text-gray-800"} onClick={() => nextImage()}>
                        <FontAwesomeIcon icon={"caret-right"} size={"4x"}/>
                    </div>
                </div>
                <span className={"flex space-x-3 pt-6"}>
                {
                    Array.from(Array(photos.length).keys()).map((dotIndex) => (
                        <FontAwesomeIcon
                            key={"indicator-" + dotIndex}
                            icon={"circle"}
                            className={`flex cursor-pointer bg-clip-text bg-gradient-to-r from-theme-green to-theme-blue ${dotIndex === localIndex ? "text-transparent" : "text-gray-300"}`}
                            onClick={() => setLocalIndex(dotIndex)}
                        />
                    ))
                }
                </span>
            </div>
        </Transition>
    );
}
