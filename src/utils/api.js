const endpointRoot = 'https://polls.apiblueprint.org/';

async function handleResponse(res) {
    const response = await res.json();
    const throwError = json => Object.assign({}, json, {status: res.status, text: res.text});
    const checkInput = json => res.ok ? json :  Promise.reject(throwError(json));
    const result = await checkInput(response);
    return result;
  }

// api call to get all the questions on load
export async function getAllQuestions(){
    try {
        const response = await fetch(`${endpointRoot}questions?`);
        return await handleResponse(response);
    }
    catch(err) {
        console.log(err);
    }
}

// api call to get one specific question
export async function getQuestion(url) {
    try {
        const response = await fetch(`${endpointRoot}${url}`);
        return await handleResponse(response);
    }
    catch(err) {
        console.log(err);
    }
}

// api call to update vote
export async function postVote(url) {
    try {
        const response = await fetch(`${endpointRoot}${url}`,{
            headers: {},
            method: 'POST',
        });
        return await handleResponse(response);
    }
    catch(err) {
        console.log(err);
    }
}

// api call to create new question
export async function postQuestion(questionData) {
    try {
        const response = await fetch(`${endpointRoot}questions?`,{
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(questionData)
        });
        return await handleResponse(response);
    }catch(err) {
        console.log(err);
    }
}