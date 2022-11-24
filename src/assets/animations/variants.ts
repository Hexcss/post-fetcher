export const homeVariants = {
    hidden: {
        x: "-100vw"
    }, 
    visible: {
        x: 0,
        transition: { delay: 0.7, duration: 0.3 }
    },
    exit: {
        x: "-100vw",
        transition: { ease: "easeInOut" }
    }
}

export const postVariants = {
    hidden: {
        x: "100vw"
    }, 
    visible: {
        x: 0,
        transition: { delay: 0.7, duration: 0.3 }
    },
    exit: {
        x: "100vw",
        transition: { ease: "easeInOut" }
    }
}