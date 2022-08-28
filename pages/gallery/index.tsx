import React, {useState} from "react";
import Layout from "../../components/layout";
import Image, {StaticImageData} from "next/image";
import ImageViewer from "../../components/image_viewer";
import {useFlukeState} from "../../components/fluke-provider";


export default function About() {
    const [viewerOpen, setViewerOpen] = useState(false);
    const [viewedImageIndex, setViewedImageIndex] = useState(0);

    const flukeState = useFlukeState();

    function handleImageClick(index: number) {
        setViewedImageIndex(index);
        setViewerOpen(true);
    }

    return (
      <Layout title={"Gallery"}>
          <>
              <div className="px-20 grid grid-cols-5 gap-5 w-full justify-self-center">
                  {flukeState && flukeState.photos.map((photo: StaticImageData, index: number) => (
                      <div
                        key={"photo-" + index}
                        className={"col-span-1 flex relative"}
                        onClick={() => handleImageClick(index)}
                      >
                          <Image
                              src={photo}
                              alt={"Photo-" + index}
                              width={500}
                              height={500}
                              placeholder={"blur"}
                              objectFit={"cover"}
                              quality={100}
                              className={"rounded-sm"}
                          />
                      </div>
                  ))}
              </div>
              <ImageViewer indexSetter={setViewedImageIndex} images={flukeState.photos} imageIndex={viewedImageIndex} open={viewerOpen} setOpen={setViewerOpen} title={"Hi there"} />
          </>
      </Layout>
    );
}
