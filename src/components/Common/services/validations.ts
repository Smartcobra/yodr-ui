

const regEx: any = {
    "REQUIRED": {
        pattern: /./,
        message: 'Required !!!'
    },
    "EMAIL": {
        pattern: /^[a-zA-Z]{1}[a-zA-Z0-9_./]*@[a-zA-Z]{3,10}\.[a-zA-Z]{2,3}$/,
        message: "Should be in the email format"
    },
    "MIN5CHAR": {
        pattern: /[a-zA-Z0-9]{4,}/,
        message: "Min 4 chars"
    },
    "PHONE": {
        pattern: /^[0-9]{10}$/,
        message: "Exactly 10 digits"
    },
    "ADDRESS":{
        pattern: /(Plot\s+no\s*:\s*(\d+))|(Flat\s+no\s*:\s*([a-zA-Z0-9]+\s*\d+))/,
        message: "Please Enter Plot No Or Flat No"
    },
    "ADDRESSREQ":{
        pattern:  /./,
        message: "Please Enter Your Address"
    },
    "USERNAME": {
        pattern: /[a-zA-Z0-9]{5,}/,
        message: "Username Should be Minimum 5 Chars"
    },
    "POSTALCODE": {
        pattern: /^[1-9][0-9]{5}$/,
        message: "Exactly 6 Digits Or Can Not Start from 0"
    },
    "POSTALCODEREQ": {
        pattern:  /./,
        message: "Please Enter Pincode"
    },
    "ONLYCHARS":{
        pattern: /^[a-zA-Z]+$/,
        message: "Please Enter Only Character"
    },
    "EMAILORPHONE":{
        pattern: /^([\w-.]+@([\w-]+\.)+[\w-]{2,4}|\+?(\d{1,4})?\s?\d{10})$/,
        message: "Please Enter Email Or Phone Number"
    },
    "NAME": {
        pattern: /./,
        message: 'Please Enter Name'
    },
    "EMAILREQ": {
        pattern: /./,
        message: 'Please Enter Email'
    },
    "MOBILEREQ": {
        pattern: /./,
        message: 'Please Enter Phone No'
    },
    "GENDER": {
        pattern: /./,
        message: 'Please Select Gender'
    },
    "DATE": {
        pattern: /./,
        message: 'Please Select Date'
    },
    "CITYREQ": {
        pattern: /./,
        message: 'Please Select City'
    },
    "STATEREQ": {
        pattern: /./,
        message: 'Please Select State'
    },
    "SPECIALIZATION": {
        pattern: /./,
        message: 'Please Select Specialization'
    },
    "SPECIALIZATIONTYPE": {
        pattern: /./,
        message: 'Please Select Specialization Type'
    },
    "ENTERDEGREE": {
        pattern: /./,
        message: 'Please Enter Degree Name'
    },
    "ENTERCOLLEGE": {
        pattern: /./,
        message: 'Please Enter College/Institute Name'
    },
    "HOSPITAL": {
        pattern: /./,
        message: 'Please Enter Hospital Name'
    },
    "DEGIGNATION": {
        pattern: /./,
        message: 'Please Enter Designation'
    },
    "AWARD": {
        pattern: /./,
        message: 'Please Enter Award Name'
    },
    "CHOOSEFILE": {
        pattern: /./,
        message: 'Please choose File'
    },
    "REGISTRATION": {
        pattern: /./,
        message: 'Please Enter Registration No'
    },


}

function validate(inputObj: any) {
    inputObj.errorMsg = "";
    inputObj.hasError = false; 
    for (let val of inputObj?.criteria) {
        const { pattern, message } = regEx[val]
        if (!pattern.test(inputObj?.value)) {
            inputObj.errorMsg = message
            inputObj.hasError = true;
            break;
        }
    }
}

export function handleFieldLevelValidation(eve: any, inputControls: any, setInputControls: any) {
    const { name, value } = eve?.target
    const clonedInputControls = JSON.parse(JSON.stringify(inputControls))
    let inputObj: any = clonedInputControls.find((obj: any) => {
        return obj.name === name
    })
    inputObj.value = value;
    validate(inputObj)
    setInputControls(clonedInputControls)
}

export function handleFormLevelValidation(inputControls: any, setInputControls: any) {
    const clonedInputControls = JSON.parse(JSON.stringify(inputControls))
    const dataObj: any = {}
    clonedInputControls.forEach((obj: any) => {
        dataObj[obj.name] = obj.value;
        validate(obj)
    })
    const isInValid = clonedInputControls.some((obj: any) => obj.errorMsg)
    setInputControls(clonedInputControls)
    return [isInValid, dataObj]
}