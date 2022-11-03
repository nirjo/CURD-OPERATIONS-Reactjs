

export const baseURL = "http://54.202.218.249:9501/api/users";

//REGEX
export const EMAIL_REGEX = '/^([a-zA-Z0-9_.\-+])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/';
export const NOT_EMPTY_REGEX = '^(?!\\s*$).+';
export const ALPHA_REGEX = '/[^a-z0-9]/gi,';
export const PASSWORD_REGEX = '/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/';
export const PHONE_REGEX = "^(\\+\\d{1,3}( )?)?((\\(\\d{1,3}\\))|\\d{1,3})[- .]?\\d{3,4}[- .]?\\d{4}$"


//Methods

export const POST = "POST"
export const GET = "GET"
export const UPDATE = "UPDATE"