export const getStatusStyle = (status?: string, service?: string) => {
    let bgColor = "bg-gray-400";
    let image;
    let color = "#fff";

    switch ((status ?? "").toLowerCase()) {
        case "completed":
            bgColor = "#d2fae5";
            color = "#488c70";
            break;
        case "ongoing":
            bgColor = "#ffe88a";
            color = "#e8a643";
            break;
        case "cancelled":
            bgColor = "#ffcdcc";
            color = "#c7464a";
            break;
    }

    switch ((service ?? "").toLowerCase()) {
        case "car":
            image = require("@/assets/icons/baby-car.png");
            break;
        case "bike":
            image = require("@/assets/icons/motorcycle.png");
            break;
    }

    return { bgColor, image, color };
};
