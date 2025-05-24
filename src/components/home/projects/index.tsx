


"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import { Button } from "@/components/ui/button";

const details = [
  {
    name: "SatyaHindi News (CMS)",
    title: "Camword Private Limited",
    image: "/images/projectLogo/satyaHindi.jpg",
    detail: "This project is being developed using React.js, TypeScript, Tailwind CSS, Ant Design, Node.js (Express.js), and MySQL. It is currently under active development, with ongoing enhancements and feature rollouts.",
    points: [
      "Authentication & Access Control: Designed and implemented a secure authentication system, ensuring smooth and protected user access. Incorporated dynamic routing for seamless navigation and developed a Role-Based Access Control (RBAC) system to manage module-level permissions based on user roles.",
      "News & Article Management: Built a comprehensive content management module supporting article creation, editing, and scheduling (auto-publish/unpublish). Developed a dedicated election news section for handling specialized content. Integrated support for rich embeds from platforms like Twitter, Instagram, and Facebook, along with a reusable image management system featuring captions and cross-post reuse, streamlining editorial workflows.",
      "Modular CMS Enhancements: Contributed to multiple CMS sections to improve content handling efficiency, editorial flexibility, and overall system performance. Regularly involved in feature development, code optimization, and UX improvements to support evolving platform requirements.",

    ],
    href: "https://www.satyahindi.com/"
  },
  {
    name: "Escorts Kubota Limited (Website)",
    title: "",
    image: "/images/projectLogo/ekl.png",
    detail: "  This is a dynamic web application and i worked within the International Business(IB) section and this project created by  using Next.js, TypeScript, Tailwind CSS, Ant Design, Express.js, and MySQL.This system enables products and features to be displayed based on the selected country, ensuring localized user experience.",
    points: [
      "Implemented an advanced, real - time filtration mechanism that updates product listings instantly when the user selects a different country, enhancing interactivity and relevance.",
      "Created and organized multiple product categories such as Farmtrac and Powertrac to improve product discoverability and navigation.",
      "Designed and integrated all key pages with a focus on usability and clarity, resulting in an intuitive interface that delivers relevant and timely information to users."
    ],
    href: "https://www.escortskubota.com/"
  },

  {
    name: "Rider Music Festival (CMS)",
    title: "Red FM 93.5",
    image: "/images/projectLogo/rmf.jpg",
    detail: " This is a robust web application using React.js, Tailwind CSS, TypeScript, Ant Design, Node.js with Express.js, and MySQL to manage festival events efficiently.",
    points: [
      "Architected and maintained a dynamic CMS to handle festival-related content including artist profiles, event schedules, and seasonal greetings, streamlining content updates and management.",
      "Engineered highly responsive and reusable UI components using Ant Design, while implementing advanced performance optimizations such as lazy loading and code splitting to enhance user experience.",
      "Seamlessly integrated backend APIs to deliver real-time data on artist information, event timelines, and user engagement metrics, ensuring up-to-date and interactive content presentation.",
      "Employed dynamic routing and sophisticated state management strategies for smooth navigation and responsive interactions across the application.",
      "Designed and optimized a mobile-first, intuitive user interface that guarantees seamless and consistent performance across devices of all sizes."
    ],
    href: "https://www.ridersmusicfestival.com/"
  },
  // {
  //   name: "Qamar Waheed Naqvi",
  //   title: "Director | Satya Hindi",
  //   image: "/images/client/qw-naqvi-2.jpg",
  //   detail: `Working with Technovatic Solutions is an absolute pleasure. Impressed with their team's attention to details, technical skills, and professional approach towards our timelines & processes. We highly recommend working with them.`,
  // },
  // {
  //   name: "Virendra Shekhawat",
  //   title: "Founder | Delhi Photography Club",
  //   image: "/images/client/vr.jpg",
  //   detail: `I've known the team at Technovatic Solutions for several years now, and we started with business collaboration. Over time, we've become close partners. The team is my go-to when it comes to technology, and they're one of the very few groups I can trust to handle any tech task. I can confidently assign them any project, knowing it will be executed flawlessly, without disrupting our existing setup.

  //   Their expertise in cutting-edge tech solutions has consistently impressed me. As the founder of Delhi Photography Club and a former Senior Product Manager for big brands like Amar Ujala, I've worked with many teams, but the professionalism and intelligence of Technovatic Solutions stand out.`,
  // },

];

const Projects = () => {
  const [expanded, setExpanded] = useState(Array(details.length).fill(false));
  const [needsReadMore, setNeedsReadMore] = useState(Array(details.length).fill(false));
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState<any>(null);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    textRefs.current.forEach((ref, index) => {
      if (ref) {
        const lineHeight = parseFloat(window.getComputedStyle(ref).lineHeight);
        const maxHeight = lineHeight * 5;
        if (ref.scrollHeight > maxHeight) {
          setNeedsReadMore((prev) => {
            const updated = [...prev];
            updated[index] = true;
            return updated;
          });
        }
      }
    });
  }, []);

  useEffect(() => {
    if (modalOpen) {
      document.body.classList.add("overflow-hidden");
      swiperRef.current?.autoplay?.stop();
    } else {
      document.body.classList.remove("overflow-hidden");
      swiperRef.current?.autoplay?.start();
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [modalOpen]);

  const handleReadMore = (index: number) => {
    setActiveTestimonial(details[index]);
    setModalOpen(true);
  };

  return (
    <div className="container mt-24 pb-10 lg:px-8 font-dmSans">
      <h2 className="text-4xl font-bold   text-[#2D3958] text-center">
        PROJECTS
      </h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
        loop={true}
        speed={2800}
        breakpoints={{
          320: { slidesPerView: 1 },
          480: { slidesPerView: 1.2 },
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {details.map((testimonial, index) => (


          <SwiperSlide key={index} className="flex justify-center relative my-11 px-2">
            <div className="relative flex flex-col items-center w-full max-w-3xl">
              <div className="testimonial-card bg-white relative rounded-3xl border border-gray-200 p-3 md:p-8 min-h-[300px] w-full shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out">

                {/* Avatar & Info */}
                <div className=" w-full flex items-center space-x-5">
                  <div className="rounded-full w-20 h-20 flex-shrink-0 overflow-hidden border-2 border-gray-200 shadow-md">
                    <Image
                      className="w-full h-full object-cover"
                      src={testimonial.image}
                      alt="logo"
                      width={80}
                      height={80}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-md text-gray-800">{testimonial.name}</h3>
                    <p className="w-full text-gray-500 text-sm">{testimonial.title}</p>
                  </div>
                </div>

                {/* detail Content */}

                <div
                  ref={(el: any) => (textRefs.current[index] = el)}
                  className={`mt-6 text-base text-gray-600 transition-all overflow-hidden ${expanded[index] ? "max-h-[1000px]" : "line-clamp-5"}`}
                  style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: expanded[index] ? "unset" : 5,
                    overflow: "hidden",
                  }}
                >
                  <p dangerouslySetInnerHTML={{ __html: testimonial.detail }} />
                  {testimonial.points && testimonial.points.length > 0 && (
                    <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-gray-600">
                      {testimonial.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  )}
                </div>


                <div className="flex justify-between items-center mt-4">

                  {/* Read More Button */}
                  {needsReadMore[index] && (
                    <button
                      className=" text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                      onClick={() => handleReadMore(index)}
                    >
                      {expanded[index] ? "Show Less" : "Read More..."}
                    </button>
                  )}

                  <a
                    href={testimonial.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-800 hover:to-blue-600">
                      Visit site
                    </Button>
                  </a>


                </div>

              </div>
            </div>
          </SwiperSlide>

        ))}
      </Swiper>

      {/* Modal */}
      {modalOpen && activeTestimonial && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 transition-all duration-300 ease-in-out">
          <div className="bg-white max-w-2xl  w-full rounded-2xl px-6  relative shadow-2xl max-h-[90vh] hover:overflow-y-auto pb-2 animate-fadeIn">

            <div className="sticky top-0 bg-white flex items-center space-x-4 mb-4 py-5">
              <div className="rounded-full w-16 h-16 flex-shrink-0 overflow-hidden">
                <Image
                  className="rounded-full object-cover"
                  src={activeTestimonial.image}
                  alt={`Avatar of ${activeTestimonial.name}`}
                  width={64}
                  height={64}
                />
              </div>
              <div>
                <h3 className="font-bold text-xl text-[#2D3958]">{activeTestimonial.name}</h3>
                <p className="text-sm text-gray-500">{activeTestimonial.title}</p>
              </div>
              <button
                className="absolute top-3 right-3 text-gray-400 hover:text-black text-2xl font-bold transition-colors"
                onClick={() => setModalOpen(false)}
                aria-label="Close Modal"
              >
                ×
              </button>

            </div>

            <div className="text-gray-700 text-[16px] leading-relaxed whitespace-pre-line mb-2">
              <p dangerouslySetInnerHTML={{ __html: activeTestimonial.detail }} />
              {activeTestimonial.points && activeTestimonial.points.length > 0 && (
                <ul className="list-disc pl-5 mt-2 space-y-2 text-sm">
                  {activeTestimonial.points.map((point: string, i: number) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
