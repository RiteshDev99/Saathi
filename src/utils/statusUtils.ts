export const getStatusStyle = (service: string) => {
    let image;

    switch ((service ?? "").toLowerCase()) {
        case "car":
            image = require("@/assets/icons/sedan.png");
            break;
        case "bike":
            image = require("@/assets/icons/motorcycle.png");
            break;
    }

    return { image };
};
