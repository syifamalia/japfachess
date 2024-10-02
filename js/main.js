// CAROUSEL
document.addEventListener("DOMContentLoaded", function () {
  var carouselElement = document.querySelector("#carouselHeader");
  var carouselInstance = new bootstrap.Carousel(carouselElement, {
    interval: 5000,
    ride: "carousel",
    pause: false,
    touch: true,
  });
});
// END CAROUSEL

document.addEventListener("DOMContentLoaded", function () {
  const animatedElementsType1 = document.querySelectorAll(
    ".card-type-1.hidden"
  );
  const animatedElementsType2 = document.querySelectorAll(
    ".card-type-2.hidden"
  );
  const textAnimated1 = document.querySelectorAll(".section-know-japfa.hidden");
  const textAnimated2 = document.querySelectorAll(
    ".section-know-content .hidden"
  );
  const textAnimated3 = document.querySelectorAll(".section-join .hidden");
  const textAnimated4 = document.querySelectorAll(
    ".section-schedule-heading.hidden"
  );
  const timelineAnimated = document.querySelectorAll(".timeline.hidden");
  const headerMainEventAnimated = document.querySelectorAll(
    ".headerMainEvent.hidden"
  );
  const mainEventCardAnimated = document.querySelectorAll(".main-event.hidden");
  const headerCompCatAnimated = document.querySelectorAll(
    ".section-comp-cat.hidden"
  );
  const cardCompCatAnimated = document.querySelectorAll(
    ".section-comp-cat-content .card.hidden"
  );

  const observerType1 = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.remove("hidden");
          entry.target.classList.add(
            "animate__animated",
            "animate__fadeInDown"
          );
          observerType1.unobserve(entry.target); // Stop observing once it is visible
        }, index * 200); // Delay each card by 200ms
      }
    });
  });

  const observerType2 = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.remove("hidden");
          entry.target.classList.add("animate__animated", "animate__zoomIn");
          observerType2.unobserve(entry.target); // Stop observing once it is visible
        }, index * 200); // Delay each card by 200ms
      }
    });
  });

  const observerType3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.remove("hidden");
          entry.target.classList.add("animate__animated", "animate__fadeInUp");
          observerType2.unobserve(entry.target); // Stop observing once it is visible
        });
      }
    });
  });

  const observerType4 = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.remove("hidden");
            entry.target.classList.add("animate__animated", "animate__zoomIn");
            observerType4.unobserve(entry.target); // Stop observing once it is visible
          }, index * 500); // Delay each element by 500ms multiplied by its index
        }
      });
    },
    { threshold: 0.1 }
  );
  const observerType5 = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.remove("hidden");
            entry.target.classList.add("animate__animated", "animate__pulse");
            observerType5.unobserve(entry.target); // Stop observing once it is visible
          });
        }
      });
    },
    { threshold: 0.1 }
  );

  const observerType6 = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.remove("hidden");
            entry.target.classList.add(
              "animate__animated",
              "animate__fadeInUp"
            );
            observerType6.unobserve(entry.target); // Stop observing once it is visible
          });
        }
      });
    },
    { threshold: 0.1 }
  );

  const observerType7 = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.remove("hidden");
            entry.target.classList.add("animate__animated", "animate__zoomIn");
            observer.unobserve(entry.target); // Stop observing once it is visible
          }, index * 200); // Delay each timeline by 200ms
        }
      });
    },
    { threshold: 0.1 }
  );

  // Observer untuk animasi headerMainEvent
  const observerType8 = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.remove("hidden");
            entry.target.classList.add("animate__animated", "animate__tada");
            observerType8.unobserve(entry.target); // Stop observing once it is visible
          }, index * 200); // Delay each element by 200ms
        }
      });
    },
    { threshold: 0.1 }
  );

  // Observer untuk animasi mainEventCard
  const observerType9 = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.remove("hidden");
            entry.target.classList.add("animate__animated", "animate__pulse");
            observerType9.unobserve(entry.target); // Stop observing once it is visible
          }, index * 200); // Delay each element by 200ms
        }
      });
    },
    { threshold: 0.1 }
  );

  // Observer untuk animasi headerCompCat
  const observerType10 = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.remove("hidden");
            entry.target.classList.add("animate__animated", "animate__zoomIn");
            observerType10.unobserve(entry.target); // Stop observing once it is visible
          }, index * 200); // Delay each element by 200ms
        }
      });
    },
    { threshold: 0.1 }
  );

  // Observer untuk animasi cardCompCat
  const observerType11 = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.remove("hidden");
            entry.target.classList.add("animate__animated", "animate__zoomIn");
            observerType11.unobserve(entry.target); // Stop observing once it is visible
          }, index * 200); // Delay each element by 200ms
        }
      });
    },
    { threshold: 0.1 }
  );

  animatedElementsType1.forEach((element) => {
    observerType1.observe(element);
  });

  animatedElementsType2.forEach((element) => {
    observerType2.observe(element);
  });

  textAnimated1.forEach((element) => {
    observerType3.observe(element);
  });

  textAnimated2.forEach((element) => {
    observerType4.observe(element);
  });

  textAnimated3.forEach((element) => {
    observerType5.observe(element);
  });

  textAnimated4.forEach((element) => {
    observerType6.observe(element);
  });

  timelineAnimated.forEach((element) => {
    observerType7.observe(element);
  });

  headerMainEventAnimated.forEach((element) => {
    observerType8.observe(element);
  });

  mainEventCardAnimated.forEach((element) => {
    observerType9.observe(element);
  });

  headerCompCatAnimated.forEach((element) => {
    observerType10.observe(element);
  });

  cardCompCatAnimated.forEach((element) => {
    observerType11.observe(element);
  });
});
