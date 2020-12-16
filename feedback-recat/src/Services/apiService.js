import axios from 'axios';


// const url="http://palm-api.us-east-2.elasticbeanstalk.com";
const url="http://localhost:5000";

// ------------------accounts APIs request handle here-----------------------
export const getAllFeedbacks = async () => {

    let res = await axios({
        method: 'get',
        url: "http://192.168.1.30:8080/feedbacks",
    })

    return res
}

export const getFeedbackById = async (id) => {

    let res = await axios({
        method: 'get',
        url: `http://192.168.1.30:8080/feedback/${id}`,
    })

    return res
}

export const getAllIncomeAccounts = async () => {

    let res = await axios({
        method: 'get',
        url: url+"/accounts/income",
    })

    return res
}

export const getAllReceivableAccounts = async () => {

    let res = await axios({
        method: 'get',
        url: url+"/accounts/receivable",    
    })

    return res
}

export const getAllExpenceAccounts = async () => {

    let res = await axios({
        method: 'get',
        url: url+"/accounts/expence",
    })

    return res
}

export const getAllBankAccounts = async () => {

    let res = await axios({
        method: 'get',
        url: url+"/accounts/bank",
    })

    return res
}

export const addAccounts = async (data) => {

    let res = await axios({
        method: 'post',
        url: url+"/accounts",
        
        data: data
    })

    return res
}



// ------------------section APIs request handle here-----------------------
export const getSections = async () => {

    let res = await axios({
        method: 'get',
        url: url+"/sections",
    })

    return res
}

export const addBooks = async (data) => {

    let res = await axios({
        method: 'post',
        url: "http://library.ap-southeast-1.elasticbeanstalk.com/api/v1/books",
        data: data
    })

    return res
}

export const removeBooks = async (id) => {

    let res = await axios({
        method: 'delete',
        url: `http://library.ap-southeast-1.elasticbeanstalk.com/api/v1/books/delete/${id}`,
    })

    return res
}
