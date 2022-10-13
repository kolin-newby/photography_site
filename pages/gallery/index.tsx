import React, {useState} from "react";
import Layout from "../../components/layout";
import {photos} from "../../components/photos";
import Image, {StaticImageData} from "next/image";
import ImageViewer from "../../components/image_viewer";
import {useFlukeState} from "../../components/fluke-provider";


export default function About() {
    const [viewerOpen, setViewerOpen] = useState(false);
    const [viewedImageIndex, setViewedImageIndex] = useState(0);

    // function handleImageClick(index: number) {
    //     setViewedImageIndex(index);
    //     setViewerOpen(true);
    // }

    return (
      <Layout title={"Gallery"}>
          <>
              <div className="my-20 flex flex-wrap w-full justify-center items center space-x-10">
                  {photos.map((photo, index) => (
                      <img
                          src={photo.src}
                          alt={photo.title}
                          key={"photo-" + index}
                          loading={"eager"}
                          onClick={() => {
                              setViewedImageIndex(index);
                              setViewerOpen(true);
                          }}
                          className={"flex object-contain h-96 rounded mb-10 shadow-lg transition-all " +
                              "transform hover:-translate-y-2 hover:shadow-2xl"}
                      />
                  ))}
              </div>
              <ImageViewer open={viewerOpen} setOpen={setViewerOpen} imageIndex={viewedImageIndex}/>
          </>
      </Layout>
    );
}
