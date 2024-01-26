
export const validURL = (string) => {

    // const regex = new RegExp(/^(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#?&//=]+\.(png|jpg|jpeg))$/); //npm run build: error  Unnecessary escape character: \+
    const regex = new RegExp(/^(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._~#?&//=]+\.(png|jpg|jpeg))$/);

    return regex.test(string);
}

export const formValidation = (country, streetAddress, city, state, latitude, longitude, description, spotName, price, preImg, img1, img2, img3, img4) => {
    const validateErrors = {}

    if(!country.trim().length) {
        validateErrors.country = "Country is required";
    }

    if(!streetAddress.trim().length) {
        validateErrors.streetAddress = "Address is required";
    }

    if(!city.trim().length) {
        validateErrors.city = "City is required";
    }

    if(!state.trim().length) {
        validateErrors.state = "State is required";
    }

    if(!latitude.toString().trim().length || isNaN(latitude) || latitude < -90 || latitude > 90) {
        validateErrors.latitude = "Latitude is required must be a number between -90 and 90";
    }

    if(!longitude.toString().trim().length || isNaN(longitude) || longitude < -180 || longitude > 180) {
        validateErrors.longitude = "Longitude is required must be a number between -180 and 180";
    }

    if( description.trim().length < 30) {
        validateErrors.description = "Description needs a minimum of 30 characters";
    }

    if(!spotName.trim().length) {
        validateErrors.spotName = "Name is required";
    }

    if( !price.toString().trim().length || isNaN(price) || price <= 0) {
        validateErrors.price = "price is required and should be a number greater than 0";
    }

    if (!preImg.trim().length) {
        validateErrors.preImgRequired = "Preview image is require";
    }

    if (!validURL(preImg.trim())) {
        validateErrors.preImg = "Invalid image URL, image URL must end in .png, .jpg, or .jpeg";
    }

    if(img1.trim().length && !validURL(img1.trim())) {
        validateErrors.img1 = "Invalid image URL, image URL must end in .png, .jpg, or .jpeg";
    }

    if(img2.trim().length && !validURL(img2.trim())) {
        validateErrors.img2 = "Invalid image URL, image URL must end in .png, .jpg, or .jpeg";
    }

    if(img3.trim().length && !validURL(img3.trim())) {
        validateErrors.img3 = "Invalid image URL, image URL must end in .png, .jpg, or .jpeg";
    }

    if(img4.trim().length && !validURL(img4.trim())) {
        validateErrors.img4 = "Invalid image URL, image URL must end in .png, .jpg, or .jpeg";
    }

    return validateErrors;
}
