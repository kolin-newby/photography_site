import React from "react";
import { Transition } from '@headlessui/react'
import Image, {StaticImageData} from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function ImageViewer({
    indexSetter,
    images,
    open,
    setOpen,
    imageIndex,
    title = ""
}: {
    indexSetter: Function,
    images: StaticImageData[],
    open: boolean,
    setOpen: Function
    imageIndex: number,
    title: string
}) {

    function nextImage() {
        if (imageIndex < (images.length - 1)) indexSetter(imageIndex + 1);
        else return;
    }

    function previousImage() {
        if (imageIndex > 0) indexSetter(imageIndex - 1);
        else return;
    }

    return (
        <Transition
            show={open}
            enter="transition-opacity duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            className={"fixed flex justify-center items-center inset-0 z-50 selection-transparent backdrop-blur bg-gray-700 bg-opacity-40"}
        >
            <div className={"flex flex-col items-center rounded-lg bg-white p-6"}>
                <div className={"flex items-center justify-end w-full"}>
                    <div className={"cursor-pointer flex pr-1 transition-all text-gray-500 hover:text-gray-800"} onClick={() => setOpen(false)}>
                        <FontAwesomeIcon icon={"times"} size={"2x"}/>
                    </div>
                </div>
                <div className={"flex flex-row items-center"}>
                    <div className={"flex px-3 cursor-pointer transition-all text-gray-500 hover:text-gray-800"} onClick={() => previousImage()}>
                        <FontAwesomeIcon icon={"caret-left"} size={"4x"}/>
                    </div>
                    <div className={"relative flex"}>
                        <Image
                            src={images[imageIndex]}
                            alt={title}
                            height={1080}
                            width={1920}
                            objectFit={"scale-down"}
                            placeholder={"blur"}
                            quality={100}
                            className={"flex rounded-lg"}
                        />
                    </div>
                    <div className={"flex px-3 cursor-pointer transition-all text-gray-500 hover:text-gray-800"} onClick={() => nextImage()}>
                        <FontAwesomeIcon icon={"caret-right"} size={"4x"}/>
                    </div>
                </div>
                <span className={"flex space-x-3 pt-6"}>
                {
                    Array.from(Array(images.length).keys()).map((dotIndex) => (
                        <FontAwesomeIcon
                            key={"indicator-" + dotIndex}
                            icon={"circle"}
                            size={"sm"}
                            className={dotIndex === imageIndex ? "text-gray-600" : "text-gray-300"}
                        />
                    ))
                }
                </span>
            </div>
        </Transition>
    );
}
