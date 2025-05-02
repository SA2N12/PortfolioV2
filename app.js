gsap.registerPlugin(ScrollTrigger);

gsap.from("header", {
    scrollTrigger: {
        trigger: "header",
        start: "top 90%", // commence quand le haut du header est à 90% de la hauteur viewport
    },
    duration: 1,
    y: -50,
    opacity: 0,
    ease: "power2.out"
});

gsap.from(".hero", {
    scrollTrigger: {
        trigger: ".hero",
        start: "top 80%",
    },
    duration: 1,
    delay: 0.5,
    y: 50,
    opacity: 0,
    ease: "power2.out"
});

gsap.from("#projects", {
    scrollTrigger: {
        trigger: "section",
        start: "top 80%",
    },
    duration: 1,
    delay: 0.8,
    y: 50,
    opacity: 0,
    ease: "power2.out",
    stagger: 0.3
});

gsap.from("#about", {
    scrollTrigger: {
        trigger: "section",
        start: "top 40%",
    },
    duration: 1,
    delay: 0.8,
    y: 50,
    opacity: 0,
    ease: "power2.out",
    stagger: 0.3
});