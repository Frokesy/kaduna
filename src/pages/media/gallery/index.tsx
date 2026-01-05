import { useState } from 'react';
import { motion, AnimatePresence, type Variants, easeOut } from 'framer-motion';
import DefaultHero from '../../../components/defaults/DefaultHero';
import Newsletter from '../../../components/home/Newsletter';
import Footer from '../../../components/defaults/Footer';

type GalleryKey = 'cms' | 'psp' | 'vpc';

const Gallery = () => {
  const cmsPics = [
    '/assets/gallery/img-one.png',
    '/assets/gallery/img-two.png',
    '/assets/gallery/img-three.png',
    '/assets/gallery/img-four.png',
    '/assets/gallery/img-five.png',
  ];

  const pspPics = [
    '/assets/gallery/img-six.png',
    '/assets/gallery/img-seven.png',
    '/assets/gallery/img-eight.png',
    '/assets/gallery/img-nine.png',
    '/assets/gallery/img-ten.png',
  ];

  const vpcPics = [
    '/assets/gallery/img-eleven.png',
    '/assets/gallery/img-twelve.png',
    '/assets/gallery/img-thirteen.png',
    '/assets/gallery/img-fourteen.png',
    '/assets/gallery/img-fifteen.png',
  ];

  const galleries: Record<GalleryKey, string[]> = {
    cms: cmsPics,
    psp: pspPics,
    vpc: vpcPics,
  };

  const [lightbox, setLightbox] = useState<{
    gallery: GalleryKey;
    index: number;
  } | null>(null);

  const openLightbox = (gallery: GalleryKey, index: number) =>
    setLightbox({ gallery, index });

  const closeLightbox = () => setLightbox(null);

  const currentImages = lightbox ? galleries[lightbox.gallery] : [];

  const next = () =>
    setLightbox((prev) =>
      prev ? { ...prev, index: (prev.index + 1) % currentImages.length } : prev
    );

  const prev = () =>
    setLightbox((prev) =>
      prev
        ? {
            ...prev,
            index:
              (prev.index - 1 + currentImages.length) % currentImages.length,
          }
        : prev
    );

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  const renderGallery = (
    title: string,
    images: string[],
    keyName: GalleryKey
  ) => (
    <div className="mt-12">
      <h2 className="text-[18px] font-semibold">{title}</h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-4 flex lg:flex-row flex-col gap-10"
      >
        {/* Large image */}
        <motion.div
          variants={itemVariants}
          className="lg:w-[50%] w-full rounded-xl overflow-hidden cursor-pointer"
          onClick={() => openLightbox(keyName, 0)}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="h-162 bg-cover bg-center"
            style={{ backgroundImage: `url(${images[0]})` }}
          />
        </motion.div>

        {/* Grid images */}
        <div className="lg:w-[50%] w-full grid grid-cols-2 gap-6">
          {images.slice(1).map((img, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="rounded-xl overflow-hidden cursor-pointer"
              onClick={() => openLightbox(keyName, idx + 1)}
            >
              <motion.div
                whileHover={{ scale: 1.12 }}
                transition={{ duration: 0.5, ease: easeOut }}
                className="h-78.75 bg-cover bg-center"
                style={{ backgroundImage: `url(${img})` }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );

  return (
    <div>
      <DefaultHero
        title="Photo Gallery"
        img="/assets/hero-imgs/gallery-hero.png"
      />

      <div className="lg:my-[15vh] my-20 w-[90vw] mx-auto">
        <h2 className="text-[20px] font-semibold">View gallery</h2>
        <p className="text-[#101828] mt-2">
          Browse photos from our events, programs, and community engagements.
        </p>

        {renderGallery('2025 Christian Muslim Summit', cmsPics, 'cms')}

        {renderGallery(
          'The Permanent Site Project – The Journey So Far',
          pspPics,
          'psp'
        )}

        {renderGallery('3D View of Proposed Center', vpcPics, 'vpc')}
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(_, info) => {
                if (info.offset.x < -100) next();
                if (info.offset.x > 100) prev();
              }}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-[90vw] max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleries[lightbox.gallery][lightbox.index]}
                alt=""
                className="max-h-[85vh] max-w-full object-contain"
              />

              <button
                onClick={closeLightbox}
                className="absolute -top-10 right-0 text-white text-2xl"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default Gallery;
