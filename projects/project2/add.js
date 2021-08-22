document.addEventListener('DOMContentLoaded', main);

async function main(){
    //버튼에 이벤트 연결
    bindSaveButton();
    
    //토큰 체크
    const token = getToken();
    if(token===null){
        location.assign('/login');
        return;
    }
    //토큰으로 서버에서 나의 정보 받아오기
    const user = await getUserByToken(token);
    if(user===null){
        localStorage.clear;
        location.assign('/login');
        return;
    }
}

async function save(event){
    event.preventDefault();
    event.stopPropagation();

    const titleElement = document.querySelector('#title');
    const messageElement = document.querySelector('#message');
    const authorElement = document.querySelector('#author');
    const urlElement = document.querySelector('#url');

    const title = titleElement.value;
    const message = messageElement.value;
    const author = authorElement.value;
    const url = urlElement.value;

    if(title===''||message===''||author===''||url===''){
        return;
    }

    const token = getToken();
    if(token===null){
        location.assign('/login');
        return;
    }
    try{
        const res = await axios.post('',{
            title,
            message,
            author,
            url
        },{
            headers:{
                Authorization:`Bearer ${token}`
            }
        });
        location.href('/');
    } catch(e){
        console.log('save error',e);
    }
}

function bindSaveButton(){
    const form = document.querySelector('#form-add-book');
    form.addEventListener('submit',save);

}

function getToken(){
    return localStorage.getItem('token');
}

async function getUserByToken(token){
    try{
        const res = await axios.get('https://api.marktube.tv/v1/me',{
            headers:{
                Authorization:`Bearer ${token}`,
            }
        });
        return res.data;
    } catch(e){
        console.log('getUserByToken error',e);
        return null;
    }
}